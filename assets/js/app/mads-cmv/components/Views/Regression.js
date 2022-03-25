
/*=================================================================================================
// Project: CADS/MADS - An Integrated Web-based Visual Platform for Materials Informatics
//          Hokkaido University (2018)
// ________________________________________________________________________________________________
// Authors: Jun Fujima (Former Lead Developer) [2018-2021]
//          Mikael Nicander Kuwahara (Current Lead Developer) [2021-]
// ________________________________________________________________________________________________
// Description: This is the Inner workings and Content Manager Controler of the 'Regression' View
// ------------------------------------------------------------------------------------------------
// Notes: 'Regression' is the manager of all current input that controls the final view of the
//         'RegressionVis' visualization component.
// ------------------------------------------------------------------------------------------------
// References: 3rd party pandas & lodash libs, Internal ViewWrapper & Form Utility Support,
//             Internal PieChart & PieForm libs,
=================================================================================================*/

//*** TODO: This is not structured the same way as other Views, should probably be adjusted to do that

//-------------------------------------------------------------------------------------------------
// Load required libraries
//-------------------------------------------------------------------------------------------------
import { DataFrame } from 'pandas-js';
import _ from 'lodash';

import React from 'react';
import { Button, Modal, Card } from 'semantic-ui-react';

import withCommandInterface from './ViewWrapper';
import convertExtentValues from './FormUtils';

import RegressionVis from '../VisComponents/RegressionVis';
import RegressionForm from './RegressionForm';

import DevStage from '../FormFields/DevStage';

//-------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------
// Custom Settings to pass to the VisComp
//-------------------------------------------------------------------------------------------------
const settings = {
  options: { title: 'Regression' },
};
//-------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------
// The View Class for this Visualization Component
//-------------------------------------------------------------------------------------------------
export default class RegressionView extends withCommandInterface( RegressionVis, RegressionForm, settings ) {

  // Manages config settings changes (passed by the connected form) in the view
  handleSubmit = (values) => {
    const { id, view, colorTags, actions, dataset, updateView } = this.props;
    let newValues = { ...values };

    // filter out non-existing columns & colorTags
    if (values.filter) {
      const colorTagIds = colorTags.map((c) => c.id);
      const filteredFilters = values.filter.filter((f) =>
        colorTagIds.includes(f)
      );
      newValues.filter = filteredFilters;
    }

    // filter out featureColumns
    const columns = this.getColumnOptionArray();
    if (values.featureColumns) {
      const filteredColumns = values.featureColumns.filter((f) =>
        columns.includes(f)
      );
      newValues.featureColumns = filteredColumns;
    }

    // extract data
    const data = {};
    const df = new DataFrame(dataset.main.data);
    const tc = df.get(newValues.targetColumn);
    data[newValues.targetColumn] = tc.values.toArray();
    newValues.featureColumns.forEach((c) => {
      const fc = df.get(c);
      data[c] = fc.values.toArray();
    });

    // set mapping
    newValues.mappings = {
      x: values.targetColumn,
      y: `${values.targetColumn}--Predicted`,
    };

    newValues = convertExtentValues(newValues);
    settings.options.title = "Regression (" + newValues.method + ") [" + newValues.cvmethod + "]";

    this.tmpViewParams = { view, newValues, data };
    actions.sendRequestViewUpdate(view, newValues, data);
  };

  // Manages Save Model Requests
  handleModelSave = (name, overwrite, id) => {
    // Note: override this if necessary
    const { actions } = this.props;

    // submit setting form
    this.formReference.submit();
    actions.saveModel(name, this.tmpViewParams, overwrite, id);
  };

  composeSubmittingData = (values) => {};

  // Manages data changes in the view
  mapData = (dataset) => {
    const { id, view, actions } = this.props;
    const data = {d1: {data: []}, d2: {data: []}};

    if (dataset[id]) {
      const targetName = view.settings.targetColumn;
      const pName = `${targetName}--Predicted`;
      let xx, yy, xx2, yy2;

      // Make sure backwards compability is implemented so old regression components will still work
      if(dataset[id]['d1']){
        xx = dataset[id]['d1'][targetName];
        yy = dataset[id]['d1'][pName];
        xx2 = dataset[id]['d2'][targetName];
        yy2 = dataset[id]['d2'][pName];
      }
      else{
        xx = dataset[id][targetName];
        yy = dataset[id][pName];
        xx2 = [];
        yy2 = [];
      }

      if (!xx && !yy) {
        return  {d1: {data: []}, d2: {data: []}};
      }

      xx.forEach((x, i) => {
        const item = {};
        item[targetName] = x;
        item[pName] = yy[i];
        data.d1.data.push(item);
      });

      xx2.forEach((x, i) => {
        const item = {};
        item[targetName] = x;
        item[pName] = yy2[i];
        data.d2.data.push(item);
      });

      if (!(dataset.main.schema.fields.some(e => e.name === this.props.view.settings.targetColumn))) {
        data.d1 = {data: []};
        data.d2 = {data: []};
        data["resetRequest"] = true;
        data["resetTitle"] = "Regression";
      }
    }

    return data;
  };

  // Draws additional features to the chart
  render() {
    const {
      dataset,
      removeView,
      view,
      id,
      selection,
      colorTags,
      isLoggedIn,
      showMessage,
      actions,
      version,
      devStage
    } = this.props;

    const { main } = dataset;
    const { propSheetOpen } = this.state;
    const columnOptions = this.getColumnOptions();
    const data = this.mapData(dataset);
    const selectionInternal = this.getSelection(selection);

    // compose filtered indices
    let filteredIndices = [];
    if (view.settings.filter) {
      view.settings.filter.forEach((f) => {
        const cTag = colorTags.find((c) => c.id === f);
        if (!cTag) {
          return;
        }
        filteredIndices = filteredIndices.concat(cTag.itemIndices);
      });

      const s = new Set(filteredIndices);
      filteredIndices = Array.from(s);
    }


    // extract scores
    const scores = {};
    if (dataset[id]) {
      if (dataset[id].scores) {
        const ss = dataset[id].scores;
        if (ss['test_r2']) {
          scores.meanR2 = _.mean(ss['test_r2']);
        }
        if (ss['test_mae']) {
          scores.meanMAE = _.mean(ss['test_mae']);
        }
      }
    }

    if(data["resetRequest"] && data["resetRequest"] === true){
      scores.meanR2 = '';
      scores.meanMAE = '';
    }

    return (
      <div className="view-container">
        <Button size="mini" icon="remove" onClick={() => this.onDeleteClick(id)} />
        <Button size="mini" icon="configure" onClick={() => this.show()} />
        <Button className="the-drag-handle" size="mini" icon="arrows alternate" /> {/* Remove this if customized component position order is to be turned off */}
        <DevStage stage={devStage} version={version} />
        <div className="view-contents">
          <RegressionVis
            data={data || []}
            {...settings}
            {...view.settings}
            properties={view.properties}
            selectedIndices={selectionInternal}
            colorTags={colorTags}
            filteredIndices={filteredIndices}
            onSelectedIndicesChange={(indices) =>
              this.handleSelectionChange(indices)
            }
            showMessage={actions.showMessage}
          />

          <div style={{ marginRight: '5px' }}>
            <Card>
              <Card.Content>
                <h3>CV scores:</h3>
                <ul>
                  <li>mean r2: {scores.meanR2}</li>
                  <li>mean MAE: {scores.meanMAE}</li>
                </ul>
              </Card.Content>
            </Card>
          </div>
        </div>

        <Modal open={propSheetOpen} onClose={this.close}>
          <Modal.Header>
            {view.name} {`[${view.id}]`}
          </Modal.Header>
          <Modal.Content>
            <RegressionForm
              initialValues={view.settings}
              enableReinitialize
              ref={(form) => {
                this.formReference = form;
              }}
              onSubmit={this.handleSubmit}
              columns={columnOptions}
              targetId={id}
              colorTags={colorTags}
              onModelSave={this.handleModelSave}
              isLoggedIn={isLoggedIn}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => this.close()}>
              Cancel
            </Button>
            <Button positive content="Submit" onClick={this.onSubmitClick} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
//-------------------------------------------------------------------------------------------------
