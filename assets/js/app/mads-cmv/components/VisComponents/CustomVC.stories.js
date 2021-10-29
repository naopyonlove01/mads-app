// IMPORT SECTION
//===================================================================================================================

// Main Dependent libraries (React and related)
//---------------------------------------------
import React from 'react';

// Storybook libraries
//---------------------------------------------
import { storiesOf } from '@storybook/react';

// Main Base Visual Component
//----------------------------
import CustomVC from './CustomVC';

// Component Related Data
//----------------------------
import { getPieDataPack } from './PieChart.stories';
import { getBarChartDataPack } from './BarChart.stories';
import { getHeatMapDataPack } from './HeatMap.stories';
import { getImageViewDataPack } from './ImageView.stories';
import { getMol3DDataPack } from './Molecule3D.stories';
import { getQuadBarDataPack } from './QuadBarChart.stories';
import { getScatterDataPack } from './Scatter.stories';
import { getScatter3DDataPack } from './Scatter3D.stories';


// PieChart Example
//=========================================
const pieDataPack = getPieDataPack();
pieDataPack.options["VisComp"] = 'PieChart';
//=========================================


// BarChart Example
//=========================================
const barChartDataPack = getBarChartDataPack();
barChartDataPack.options["VisComp"] = 'BarChart';
//=========================================


// HeatMap Example
//=========================================
const heatMapDataPack = getHeatMapDataPack();
heatMapDataPack.options["VisComp"] = 'HeatMap';
//=========================================


// ImageView Example
//=========================================
const imageViewDataPack = getImageViewDataPack();
imageViewDataPack.options["VisComp"] = 'ImageView';
imageViewDataPack.options.title = "The Ultimate Award";
imageViewDataPack.options.caption = "Getting one of these should make anyone happy";
imageViewDataPack.data.data = "https://upload.wikimedia.org/wikipedia/en/e/ed/Nobel_Prize.png";
//=========================================


// Molecule3D Example
//=========================================
const mol3DDataPack = getMol3DDataPack();
mol3DDataPack["options"] = {VisComp: 'Molecule3D'};
//=========================================


// Periodic Table Example (need no extrenal data)
//=========================================
const periodicTableElementDataPack = {options: {VisComp: 'PeriodicTableChart'}};
//=========================================
//=========================================


// QuadBar Example
//=========================================
const quadBarDataPack = getQuadBarDataPack();
quadBarDataPack["options"] = {VisComp: 'QuadBarChart'};
//=========================================


// Scatter Example
//=========================================
const scatterDataPack = getScatterDataPack();
scatterDataPack["options"] = {VisComp: 'Scatter'};
//=========================================


// Scatter3D Example
//=========================================
const scatter3DDataPack = getScatter3DDataPack();
scatter3DDataPack.options["VisComp"] = 'Scatter3D';
//=========================================


const stories = storiesOf('CustomVC', module);

stories
  .add('...empty', () => <CustomVC />)
  .add('...PieChart Example', () => (
    <CustomVC
      data = { pieDataPack.data }
      mappings = { pieDataPack.mappings }
      options = { pieDataPack.options }
    />
  ))
  .add('...BarChart Example', () => (
    <CustomVC
      data = { barChartDataPack.data }
      mappings = { barChartDataPack.mappings }
      options = { barChartDataPack.options }
      onSelectedIndicesChange = { barChartDataPack.onSelectedIndicesChange }
    />
  ))
  .add('...HeatMap Example', () => (
    <CustomVC
      data = { heatMapDataPack.data }
      options = { heatMapDataPack.options }
    />
  ))
  .add('...ImageView Example', () => (
    <CustomVC
      data = { imageViewDataPack.data }
      options = { imageViewDataPack.options }
    />
  ))
  .add('...Molecule3D Example', () => (
    <CustomVC
      data = { mol3DDataPack.data }
      options = { mol3DDataPack["options"] }
    />
  ))
  .add('...Periodic Table Example', () => (
    <CustomVC
      options = { periodicTableElementDataPack.options }
    />
  ))
  .add('...QuadBarChart Example', () => (
    <CustomVC
      data = { quadBarDataPack.data }
      mappings = { quadBarDataPack.mappings }
      options = { quadBarDataPack.options }
    />
  ))
  .add('...Scatter Example', () => (
    <CustomVC
      data = { scatterDataPack.data }
      mappings = { scatterDataPack.mappings }
      options = { scatterDataPack.options }
    />
  ))
  .add('...Scatter3D Example', () => (
    <CustomVC
      data = { scatter3DDataPack.data }
      options = { scatter3DDataPack.options }
    />
  ));
