import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Layout from './components/Layout';
import DatePickerButton from './components/DatePickerButton';

injectTapEventPlugin();
const app = document.getElementById('app');
ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<Router history={hashHistory}>
			<Route path='/' component={Layout}>
				<IndexRoute component={DatePickerButton}></IndexRoute>
			</Route>
		</Router>
  </MuiThemeProvider>
, app);