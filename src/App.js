/* eslint-disable no-console */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';

//connect: Permite conectar react con redux
//import connect from 'react-redux/lib/connect/connect';
//import { store } from './store';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,co',
  'Mexico,mx',
  'Madrid,es'
];
class App extends Component {

  render() {
    return (
      
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" className='nav' />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities} ></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                    <ForecastExtendedContainer></ForecastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

//Connect maneja dos funciones de parametro y una de retorno, el segundo parametro maneja las acciones
export default App;


