/*=================================================================================================
// Project: CADS/MADS - An Integrated Web-based Visual Platform for Materials Informatics
//          Hokkaido University (2018)
//          Last Update: Q3 2023
// ________________________________________________________________________________________________
// Authors: Mikael Nicander Kuwahara (Lead Developer) [2021-]
//          Jun Fujima (Former Lead Developer) [2018-2021]
// ________________________________________________________________________________________________
// Description: This is an example test sample dataset of unemployment in the US over time,
//              populary used for understanding heatmaps, and is used for that purpose also here
//              during development testing in the localhost Storybook environment, and it is not
//              used in the live online website.
// ------------------------------------------------------------------------------------------------
// Notes: 'Unemployment' data contains data of unemployment in the US over decades.
// ------------------------------------------------------------------------------------------------
// References: None
=================================================================================================*/

//-------------------------------------------------------------------------------------------------
// Monthly unemployment in the US from 1948 to 2016
//-------------------------------------------------------------------------------------------------
const data = [
  {
    "Year": 1948,
    "Jan": 4,
    "Feb": 4.7,
    "Mar": 4.5,
    "Apr": 4,
    "May": 3.4,
    "Jun": 3.9,
    "Jul": 3.9,
    "Aug": 3.6,
    "Sep": 3.4,
    "Oct": 2.9,
    "Nov": 3.3,
    "Dec": 3.6,
    "Annual": 3.8
  },
  {
    "Year": 1949,
    "Jan": 5,
    "Feb": 5.8,
    "Mar": 5.6,
    "Apr": 5.4,
    "May": 5.7,
    "Jun": 6.4,
    "Jul": 7,
    "Aug": 6.3,
    "Sep": 5.9,
    "Oct": 6.1,
    "Nov": 5.7,
    "Dec": 6,
    "Annual": 5.9
  },
  {
    "Year": 1950,
    "Jan": 7.6,
    "Feb": 7.9,
    "Mar": 7.1,
    "Apr": 6,
    "May": 5.3,
    "Jun": 5.6,
    "Jul": 5.3,
    "Aug": 4.1,
    "Sep": 4,
    "Oct": 3.3,
    "Nov": 3.8,
    "Dec": 3.9,
    "Annual": 5.3
  },
  {
    "Year": 1951,
    "Jan": 4.4,
    "Feb": 4.2,
    "Mar": 3.8,
    "Apr": 3.2,
    "May": 2.9,
    "Jun": 3.4,
    "Jul": 3.3,
    "Aug": 2.9,
    "Sep": 3,
    "Oct": 2.8,
    "Nov": 3.2,
    "Dec": 2.9,
    "Annual": 3.3
  },
  {
    "Year": 1952,
    "Jan": 3.7,
    "Feb": 3.8,
    "Mar": 3.3,
    "Apr": 3,
    "May": 2.9,
    "Jun": 3.2,
    "Jul": 3.3,
    "Aug": 3.1,
    "Sep": 2.7,
    "Oct": 2.4,
    "Nov": 2.5,
    "Dec": 2.5,
    "Annual": 3
  },
  {
    "Year": 1953,
    "Jan": 3.4,
    "Feb": 3.2,
    "Mar": 2.9,
    "Apr": 2.8,
    "May": 2.5,
    "Jun": 2.7,
    "Jul": 2.7,
    "Aug": 2.4,
    "Sep": 2.6,
    "Oct": 2.5,
    "Nov": 3.2,
    "Dec": 4.2,
    "Annual": 2.9
  },
  {
    "Year": 1954,
    "Jan": 5.7,
    "Feb": 6.3,
    "Mar": 6.4,
    "Apr": 6.1,
    "May": 5.7,
    "Jun": 5.7,
    "Jul": 5.7,
    "Aug": 5.4,
    "Sep": 5.3,
    "Oct": 4.6,
    "Nov": 4.9,
    "Dec": 4.8,
    "Annual": 5.5
  },
  {
    "Year": 1955,
    "Jan": 5.8,
    "Feb": 5.7,
    "Mar": 5.2,
    "Apr": 4.9,
    "May": 4.2,
    "Jun": 4.4,
    "Jul": 4,
    "Aug": 3.8,
    "Sep": 3.5,
    "Oct": 3.4,
    "Nov": 3.8,
    "Dec": 3.9,
    "Annual": 4.4
  },
  {
    "Year": 1956,
    "Jan": 4.7,
    "Feb": 4.8,
    "Mar": 4.7,
    "Apr": 4.1,
    "May": 4.2,
    "Jun": 4.7,
    "Jul": 4.4,
    "Aug": 3.7,
    "Sep": 3.4,
    "Oct": 3.1,
    "Nov": 3.9,
    "Dec": 4,
    "Annual": 4.1
  },
  {
    "Year": 1957,
    "Jan": 4.9,
    "Feb": 4.7,
    "Mar": 4.3,
    "Apr": 4,
    "May": 3.9,
    "Jun": 4.6,
    "Jul": 4.1,
    "Aug": 3.7,
    "Sep": 3.7,
    "Oct": 3.6,
    "Nov": 4.6,
    "Dec": 5,
    "Annual": 4.3
  },
  {
    "Year": 1958,
    "Jan": 6.8,
    "Feb": 7.7,
    "Mar": 7.7,
    "Apr": 7.5,
    "May": 7.1,
    "Jun": 7.6,
    "Jul": 7.4,
    "Aug": 6.7,
    "Sep": 6,
    "Oct": 5.5,
    "Nov": 5.6,
    "Dec": 6,
    "Annual": 6.8
  },
  {
    "Year": 1959,
    "Jan": 7,
    "Feb": 7,
    "Mar": 6.4,
    "Apr": 5.2,
    "May": 4.9,
    "Jun": 5.4,
    "Jul": 5.2,
    "Aug": 4.8,
    "Sep": 4.7,
    "Oct": 4.7,
    "Nov": 5.3,
    "Dec": 5.1,
    "Annual": 5.5
  },
  {
    "Year": 1960,
    "Jan": 6.1,
    "Feb": 5.7,
    "Mar": 6.1,
    "Apr": 5.2,
    "May": 4.8,
    "Jun": 5.8,
    "Jul": 5.5,
    "Aug": 5.2,
    "Sep": 4.7,
    "Oct": 5,
    "Nov": 5.6,
    "Dec": 6.4,
    "Annual": 5.5
  },
  {
    "Year": 1961,
    "Jan": 7.7,
    "Feb": 8.1,
    "Mar": 7.7,
    "Apr": 7,
    "May": 6.6,
    "Jun": 7.3,
    "Jul": 6.9,
    "Aug": 6.2,
    "Sep": 5.8,
    "Oct": 5.5,
    "Nov": 5.6,
    "Dec": 5.8,
    "Annual": 6.7
  },
  {
    "Year": 1962,
    "Jan": 6.7,
    "Feb": 6.5,
    "Mar": 6.2,
    "Apr": 5.5,
    "May": 5.1,
    "Jun": 5.9,
    "Jul": 5.3,
    "Aug": 5.3,
    "Sep": 4.9,
    "Oct": 4.5,
    "Nov": 5.3,
    "Dec": 5.3,
    "Annual": 5.5
  },
  {
    "Year": 1963,
    "Jan": 6.6,
    "Feb": 6.9,
    "Mar": 6.3,
    "Apr": 5.6,
    "May": 5.5,
    "Jun": 6.2,
    "Jul": 5.6,
    "Aug": 5.2,
    "Sep": 4.8,
    "Oct": 4.7,
    "Nov": 5.3,
    "Dec": 5.3,
    "Annual": 5.7
  },
  {
    "Year": 1964,
    "Jan": 6.4,
    "Feb": 6.2,
    "Mar": 5.9,
    "Apr": 5.3,
    "May": 4.8,
    "Jun": 5.9,
    "Jul": 4.9,
    "Aug": 4.8,
    "Sep": 4.5,
    "Oct": 4.4,
    "Nov": 4.5,
    "Dec": 4.7,
    "Annual": 5.2
  },
  {
    "Year": 1965,
    "Jan": 5.5,
    "Feb": 5.7,
    "Mar": 5.1,
    "Apr": 4.7,
    "May": 4.3,
    "Jun": 5.3,
    "Jul": 4.5,
    "Aug": 4.2,
    "Sep": 3.8,
    "Oct": 3.6,
    "Nov": 3.9,
    "Dec": 3.7,
    "Annual": 4.5
  },
  {
    "Year": 1966,
    "Jan": 4.4,
    "Feb": 4.2,
    "Mar": 4,
    "Apr": 3.6,
    "May": 3.7,
    "Jun": 4.6,
    "Jul": 3.9,
    "Aug": 3.6,
    "Sep": 3.3,
    "Oct": 3.2,
    "Nov": 3.4,
    "Dec": 3.5,
    "Annual": 3.8
  },
  {
    "Year": 1967,
    "Jan": 4.2,
    "Feb": 4.2,
    "Mar": 3.9,
    "Apr": 3.5,
    "May": 3.2,
    "Jun": 4.6,
    "Jul": 4.1,
    "Aug": 3.7,
    "Sep": 3.7,
    "Oct": 3.8,
    "Nov": 3.7,
    "Dec": 3.5,
    "Annual": 3.8
  },
  {
    "Year": 1968,
    "Jan": 4,
    "Feb": 4.2,
    "Mar": 3.8,
    "Apr": 3.2,
    "May": 2.9,
    "Jun": 4.5,
    "Jul": 4,
    "Aug": 3.5,
    "Sep": 3.3,
    "Oct": 3.2,
    "Nov": 3.3,
    "Dec": 3.1,
    "Annual": 3.6
  },
  {
    "Year": 1969,
    "Jan": 3.7,
    "Feb": 3.7,
    "Mar": 3.5,
    "Apr": 3.2,
    "May": 2.9,
    "Jun": 4.1,
    "Jul": 3.8,
    "Aug": 3.5,
    "Sep": 3.7,
    "Oct": 3.5,
    "Nov": 3.3,
    "Dec": 3.2,
    "Annual": 3.5
  },
  {
    "Year": 1970,
    "Jan": 4.2,
    "Feb": 4.7,
    "Mar": 4.6,
    "Apr": 4.3,
    "May": 4.1,
    "Jun": 5.6,
    "Jul": 5.3,
    "Aug": 5,
    "Sep": 5.2,
    "Oct": 5.1,
    "Nov": 5.5,
    "Dec": 5.6,
    "Annual": 4.9
  },
  {
    "Year": 1971,
    "Jan": 6.6,
    "Feb": 6.6,
    "Mar": 6.3,
    "Apr": 5.7,
    "May": 5.3,
    "Jun": 6.5,
    "Jul": 6.2,
    "Aug": 5.9,
    "Sep": 5.8,
    "Oct": 5.4,
    "Nov": 5.7,
    "Dec": 5.5,
    "Annual": 5.9
  },
  {
    "Year": 1972,
    "Jan": 6.5,
    "Feb": 6.4,
    "Mar": 6.1,
    "Apr": 5.5,
    "May": 5.1,
    "Jun": 6.2,
    "Jul": 5.9,
    "Aug": 5.5,
    "Sep": 5.4,
    "Oct": 5.1,
    "Nov": 4.9,
    "Dec": 4.8,
    "Annual": 5.6
  },
  {
    "Year": 1973,
    "Jan": 5.5,
    "Feb": 5.6,
    "Mar": 5.2,
    "Apr": 4.8,
    "May": 4.4,
    "Jun": 5.4,
    "Jul": 5,
    "Aug": 4.7,
    "Sep": 4.7,
    "Oct": 4.2,
    "Nov": 4.6,
    "Dec": 4.6,
    "Annual": 4.9
  },
  {
    "Year": 1974,
    "Jan": 5.7,
    "Feb": 5.8,
    "Mar": 5.3,
    "Apr": 4.8,
    "May": 4.6,
    "Jun": 5.8,
    "Jul": 5.7,
    "Aug": 5.3,
    "Sep": 5.7,
    "Oct": 5.5,
    "Nov": 6.2,
    "Dec": 6.7,
    "Annual": 5.6
  },
  {
    "Year": 1975,
    "Jan": 9,
    "Feb": 9.1,
    "Mar": 9.1,
    "Apr": 8.6,
    "May": 8.3,
    "Jun": 9.1,
    "Jul": 8.7,
    "Aug": 8.2,
    "Sep": 8.1,
    "Oct": 7.8,
    "Nov": 7.8,
    "Dec": 7.8,
    "Annual": 8.5
  },
  {
    "Year": 1976,
    "Jan": 8.8,
    "Feb": 8.7,
    "Mar": 8.1,
    "Apr": 7.4,
    "May": 6.8,
    "Jun": 8,
    "Jul": 7.8,
    "Aug": 7.6,
    "Sep": 7.4,
    "Oct": 7.2,
    "Nov": 7.4,
    "Dec": 7.4,
    "Annual": 7.7
  },
  {
    "Year": 1977,
    "Jan": 8.3,
    "Feb": 8.5,
    "Mar": 7.9,
    "Apr": 6.9,
    "May": 6.4,
    "Jun": 7.5,
    "Jul": 7,
    "Aug": 6.8,
    "Sep": 6.6,
    "Oct": 6.4,
    "Nov": 6.5,
    "Dec": 6,
    "Annual": 7.1
  },
  {
    "Year": 1978,
    "Jan": 7.1,
    "Feb": 6.9,
    "Mar": 6.6,
    "Apr": 5.8,
    "May": 5.5,
    "Jun": 6.2,
    "Jul": 6.3,
    "Aug": 5.9,
    "Sep": 5.8,
    "Oct": 5.4,
    "Nov": 5.6,
    "Dec": 5.7,
    "Annual": 6.1
  },
  {
    "Year": 1979,
    "Jan": 6.4,
    "Feb": 6.4,
    "Mar": 6.1,
    "Apr": 5.5,
    "May": 5.2,
    "Jun": 6,
    "Jul": 5.9,
    "Aug": 5.9,
    "Sep": 5.7,
    "Oct": 5.6,
    "Nov": 5.6,
    "Dec": 5.7,
    "Annual": 5.8
  },
  {
    "Year": 1980,
    "Jan": 6.9,
    "Feb": 6.8,
    "Mar": 6.6,
    "Apr": 6.7,
    "May": 7.1,
    "Jun": 7.8,
    "Jul": 7.9,
    "Aug": 7.6,
    "Sep": 7.2,
    "Oct": 7.1,
    "Nov": 7.1,
    "Dec": 6.9,
    "Annual": 7.1
  },
  {
    "Year": 1981,
    "Jan": 8.2,
    "Feb": 8,
    "Mar": 7.7,
    "Apr": 7,
    "May": 7.1,
    "Jun": 7.7,
    "Jul": 7.3,
    "Aug": 7.2,
    "Sep": 7.3,
    "Oct": 7.5,
    "Nov": 7.9,
    "Dec": 8.3,
    "Annual": 7.6
  },
  {
    "Year": 1982,
    "Jan": 9.4,
    "Feb": 9.6,
    "Mar": 9.5,
    "Apr": 9.2,
    "May": 9.1,
    "Jun": 9.8,
    "Jul": 9.8,
    "Aug": 9.6,
    "Sep": 9.7,
    "Oct": 9.9,
    "Nov": 10.4,
    "Dec": 10.5,
    "Annual": 9.7
  },
  {
    "Year": 1983,
    "Jan": 11.4,
    "Feb": 11.3,
    "Mar": 10.8,
    "Apr": 10,
    "May": 9.8,
    "Jun": 10.2,
    "Jul": 9.4,
    "Aug": 9.2,
    "Sep": 8.8,
    "Oct": 8.4,
    "Nov": 8.1,
    "Dec": 8,
    "Annual": 9.6
  },
  {
    "Year": 1984,
    "Jan": 8.8,
    "Feb": 8.4,
    "Mar": 8.1,
    "Apr": 7.6,
    "May": 7.2,
    "Jun": 7.4,
    "Jul": 7.5,
    "Aug": 7.3,
    "Sep": 7.1,
    "Oct": 7,
    "Nov": 6.9,
    "Dec": 7,
    "Annual": 7.5
  },
  {
    "Year": 1985,
    "Jan": 8,
    "Feb": 7.8,
    "Mar": 7.5,
    "Apr": 7.1,
    "May": 7,
    "Jun": 7.5,
    "Jul": 7.4,
    "Aug": 6.9,
    "Sep": 6.9,
    "Oct": 6.8,
    "Nov": 6.7,
    "Dec": 6.7,
    "Annual": 7.2
  },
  {
    "Year": 1986,
    "Jan": 7.3,
    "Feb": 7.8,
    "Mar": 7.5,
    "Apr": 7,
    "May": 7,
    "Jun": 7.3,
    "Jul": 7,
    "Aug": 6.7,
    "Sep": 6.8,
    "Oct": 6.6,
    "Nov": 6.6,
    "Dec": 6.3,
    "Annual": 7
  },
  {
    "Year": 1987,
    "Jan": 7.3,
    "Feb": 7.2,
    "Mar": 6.9,
    "Apr": 6.2,
    "May": 6.1,
    "Jun": 6.3,
    "Jul": 6.1,
    "Aug": 5.8,
    "Sep": 5.7,
    "Oct": 5.7,
    "Nov": 5.6,
    "Dec": 5.4,
    "Annual": 6.2
  },
  {
    "Year": 1988,
    "Jan": 6.3,
    "Feb": 6.2,
    "Mar": 5.9,
    "Apr": 5.3,
    "May": 5.4,
    "Jun": 5.5,
    "Jul": 5.5,
    "Aug": 5.4,
    "Sep": 5.2,
    "Oct": 5,
    "Nov": 5.2,
    "Dec": 5,
    "Annual": 5.5
  },
  {
    "Year": 1989,
    "Jan": 6,
    "Feb": 5.6,
    "Mar": 5.2,
    "Apr": 5.1,
    "May": 5,
    "Jun": 5.5,
    "Jul": 5.3,
    "Aug": 5.1,
    "Sep": 5.1,
    "Oct": 5,
    "Nov": 5.2,
    "Dec": 5.1,
    "Annual": 5.3
  },
  {
    "Year": 1990,
    "Jan": 6,
    "Feb": 5.9,
    "Mar": 5.5,
    "Apr": 5.3,
    "May": 5.2,
    "Jun": 5.4,
    "Jul": 5.6,
    "Aug": 5.5,
    "Sep": 5.6,
    "Oct": 5.5,
    "Nov": 5.9,
    "Dec": 6,
    "Annual": 5.6
  },
  {
    "Year": 1991,
    "Jan": 7.1,
    "Feb": 7.3,
    "Mar": 7.2,
    "Apr": 6.5,
    "May": 6.7,
    "Jun": 7,
    "Jul": 6.8,
    "Aug": 6.6,
    "Sep": 6.5,
    "Oct": 6.5,
    "Nov": 6.7,
    "Dec": 6.9,
    "Annual": 6.8
  },
  {
    "Year": 1992,
    "Jan": 8.1,
    "Feb": 8.2,
    "Mar": 7.8,
    "Apr": 7.2,
    "May": 7.3,
    "Jun": 8,
    "Jul": 7.7,
    "Aug": 7.4,
    "Sep": 7.3,
    "Oct": 6.9,
    "Nov": 7.1,
    "Dec": 7.1,
    "Annual": 7.5
  },
  {
    "Year": 1993,
    "Jan": 8,
    "Feb": 7.8,
    "Mar": 7.4,
    "Apr": 6.9,
    "May": 6.8,
    "Jun": 7.2,
    "Jul": 7,
    "Aug": 6.6,
    "Sep": 6.4,
    "Oct": 6.4,
    "Nov": 6.2,
    "Dec": 6.1,
    "Annual": 6.9
  },
  {
    "Year": 1994,
    "Jan": 7.3,
    "Feb": 7.1,
    "Mar": 6.8,
    "Apr": 6.2,
    "May": 5.9,
    "Jun": 6.2,
    "Jul": 6.2,
    "Aug": 5.9,
    "Sep": 5.6,
    "Oct": 5.4,
    "Nov": 5.3,
    "Dec": 5.1,
    "Annual": 6.1
  },
  {
    "Year": 1995,
    "Jan": 6.2,
    "Feb": 5.9,
    "Mar": 5.7,
    "Apr": 5.6,
    "May": 5.5,
    "Jun": 5.8,
    "Jul": 5.9,
    "Aug": 5.6,
    "Sep": 5.4,
    "Oct": 5.2,
    "Nov": 5.3,
    "Dec": 5.2,
    "Annual": 5.6
  },
  {
    "Year": 1996,
    "Jan": 6.3,
    "Feb": 6,
    "Mar": 5.8,
    "Apr": 5.4,
    "May": 5.4,
    "Jun": 5.5,
    "Jul": 5.6,
    "Aug": 5.1,
    "Sep": 5,
    "Oct": 4.9,
    "Nov": 5,
    "Dec": 5,
    "Annual": 5.4
  },
  {
    "Year": 1997,
    "Jan": 5.9,
    "Feb": 5.7,
    "Mar": 5.5,
    "Apr": 4.8,
    "May": 4.7,
    "Jun": 5.2,
    "Jul": 5,
    "Aug": 4.8,
    "Sep": 4.7,
    "Oct": 4.4,
    "Nov": 4.3,
    "Dec": 4.4,
    "Annual": 4.9
  },
  {
    "Year": 1998,
    "Jan": 5.2,
    "Feb": 5,
    "Mar": 5,
    "Apr": 4.1,
    "May": 4.2,
    "Jun": 4.7,
    "Jul": 4.7,
    "Aug": 4.5,
    "Sep": 4.4,
    "Oct": 4.2,
    "Nov": 4.1,
    "Dec": 4,
    "Annual": 4.5
  },
  {
    "Year": 1999,
    "Jan": 4.8,
    "Feb": 4.7,
    "Mar": 4.4,
    "Apr": 4.1,
    "May": 4,
    "Jun": 4.5,
    "Jul": 4.5,
    "Aug": 4.2,
    "Sep": 4.1,
    "Oct": 3.8,
    "Nov": 3.8,
    "Dec": 3.7,
    "Annual": 4.2
  },
  {
    "Year": 2000,
    "Jan": 4.5,
    "Feb": 4.4,
    "Mar": 4.3,
    "Apr": 3.7,
    "May": 3.8,
    "Jun": 4.1,
    "Jul": 4.2,
    "Aug": 4.1,
    "Sep": 3.8,
    "Oct": 3.6,
    "Nov": 3.7,
    "Dec": 3.7,
    "Annual": 4
  },
  {
    "Year": 2001,
    "Jan": 4.7,
    "Feb": 4.6,
    "Mar": 4.5,
    "Apr": 4.2,
    "May": 4.1,
    "Jun": 4.7,
    "Jul": 4.7,
    "Aug": 4.9,
    "Sep": 4.7,
    "Oct": 5,
    "Nov": 5.3,
    "Dec": 5.4,
    "Annual": 4.7
  },
  {
    "Year": 2002,
    "Jan": 6.3,
    "Feb": 6.1,
    "Mar": 6.1,
    "Apr": 5.7,
    "May": 5.5,
    "Jun": 6,
    "Jul": 5.9,
    "Aug": 5.7,
    "Sep": 5.4,
    "Oct": 5.3,
    "Nov": 5.6,
    "Dec": 5.7,
    "Annual": 5.8
  },
  {
    "Year": 2003,
    "Jan": 6.5,
    "Feb": 6.4,
    "Mar": 6.2,
    "Apr": 5.8,
    "May": 5.8,
    "Jun": 6.5,
    "Jul": 6.3,
    "Aug": 6,
    "Sep": 5.8,
    "Oct": 5.6,
    "Nov": 5.6,
    "Dec": 5.4,
    "Annual": 6
  },
  {
    "Year": 2004,
    "Jan": 6.3,
    "Feb": 6,
    "Mar": 6,
    "Apr": 5.4,
    "May": 5.3,
    "Jun": 5.8,
    "Jul": 5.7,
    "Aug": 5.4,
    "Sep": 5.1,
    "Oct": 5.1,
    "Nov": 5.2,
    "Dec": 5.1,
    "Annual": 5.5
  },
  {
    "Year": 2005,
    "Jan": 5.7,
    "Feb": 5.8,
    "Mar": 5.4,
    "Apr": 4.9,
    "May": 4.9,
    "Jun": 5.2,
    "Jul": 5.2,
    "Aug": 4.9,
    "Sep": 4.8,
    "Oct": 4.6,
    "Nov": 4.8,
    "Dec": 4.6,
    "Annual": 5.1
  },
  {
    "Year": 2006,
    "Jan": 5.1,
    "Feb": 5.1,
    "Mar": 4.8,
    "Apr": 4.5,
    "May": 4.4,
    "Jun": 4.8,
    "Jul": 5,
    "Aug": 4.6,
    "Sep": 4.4,
    "Oct": 4.1,
    "Nov": 4.3,
    "Dec": 4.3,
    "Annual": 4.6
  },
  {
    "Year": 2007,
    "Jan": 5,
    "Feb": 4.9,
    "Mar": 4.5,
    "Apr": 4.3,
    "May": 4.3,
    "Jun": 4.7,
    "Jul": 4.9,
    "Aug": 4.6,
    "Sep": 4.5,
    "Oct": 4.4,
    "Nov": 4.5,
    "Dec": 4.8,
    "Annual": 4.6
  },
  {
    "Year": 2008,
    "Jan": 5.4,
    "Feb": 5.2,
    "Mar": 5.2,
    "Apr": 4.8,
    "May": 5.2,
    "Jun": 5.7,
    "Jul": 6,
    "Aug": 6.1,
    "Sep": 6,
    "Oct": 6.1,
    "Nov": 6.5,
    "Dec": 7.1,
    "Annual": 5.8
  },
  {
    "Year": 2009,
    "Jan": 8.5,
    "Feb": 8.9,
    "Mar": 9,
    "Apr": 8.6,
    "May": 9.1,
    "Jun": 9.7,
    "Jul": 9.7,
    "Aug": 9.6,
    "Sep": 9.5,
    "Oct": 9.5,
    "Nov": 9.4,
    "Dec": 9.7,
    "Annual": 9.3
  },
  {
    "Year": 2010,
    "Jan": 10.6,
    "Feb": 10.4,
    "Mar": 10.2,
    "Apr": 9.5,
    "May": 9.3,
    "Jun": 9.6,
    "Jul": 9.7,
    "Aug": 9.5,
    "Sep": 9.2,
    "Oct": 9,
    "Nov": 9.3,
    "Dec": 9.1,
    "Annual": 9.6
  },
  {
    "Year": 2011,
    "Jan": 9.8,
    "Feb": 9.5,
    "Mar": 9.2,
    "Apr": 8.7,
    "May": 8.7,
    "Jun": 9.3,
    "Jul": 9.3,
    "Aug": 9.1,
    "Sep": 8.8,
    "Oct": 8.5,
    "Nov": 8.2,
    "Dec": 8.3,
    "Annual": 8.9
  },
  {
    "Year": 2012,
    "Jan": 8.8,
    "Feb": 8.7,
    "Mar": 8.4,
    "Apr": 7.7,
    "May": 7.9,
    "Jun": 8.4,
    "Jul": 8.6,
    "Aug": 8.2,
    "Sep": 7.6,
    "Oct": 7.5,
    "Nov": 7.4,
    "Dec": 7.6,
    "Annual": 8.1
  },
  {
    "Year": 2013,
    "Jan": 8.5,
    "Feb": 8.1,
    "Mar": 7.6,
    "Apr": 7.1,
    "May": 7.3,
    "Jun": 7.8,
    "Jul": 7.7,
    "Aug": 7.3,
    "Sep": 7,
    "Oct": 7,
    "Nov": 6.6,
    "Dec": 6.5,
    "Annual": 7.4
  },
  {
    "Year": 2014,
    "Jan": 7,
    "Feb": 7,
    "Mar": 6.8,
    "Apr": 5.9,
    "May": 6.1,
    "Jun": 6.3,
    "Jul": 6.5,
    "Aug": 6.3,
    "Sep": 5.7,
    "Oct": 5.5,
    "Nov": 5.5,
    "Dec": 5.4,
    "Annual": 6.2
  },
  {
    "Year": 2015,
    "Jan": 6.1,
    "Feb": 5.8,
    "Mar": 5.6,
    "Apr": 5.1,
    "May": 5.3,
    "Jun": 5.5,
    "Jul": 5.6,
    "Aug": 5.2,
    "Sep": 4.9,
    "Oct": 4.8,
    "Nov": 4.8,
    "Dec": 4.8,
    "Annual": 5.3
  },
  {
    "Year": 2016,
    "Jan": 5.3,
    "Feb": 5.2,
    "Mar": 5.1,
    "Apr": 4.7,
    "May": 4.5,
    "Jun": 5.1,
    "Jul": 5.1,
    "Aug": 5,
    "Sep": 4.8,
    "Oct": 4.7,
    "Nov": 4.4,
    "Dec": 4.5,
    "Annual": 4.9
  }
];
//-------------------------------------------------------------------------------------------------

export default data;
