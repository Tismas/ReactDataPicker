import React from 'react';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import { DatePicker,TextField } from 'material-ui';

export default class DatePickerButton extends React.Component {
	
	constructor() {
		super();
		this.state = {label:'Change Date'};
	}

	changeLabel(n, date) {
		this.setState({label:date.toDateString()});
	}

	render() {
		return (
				<DatePicker name='date' autoOk={true} className='btn btn-lg btn-block' textFieldStyle={{width:"inherit"}} onChange={this.changeLabel.bind(this)}>
					<RaisedButton label={this.state.label}></RaisedButton>
				</DatePicker>
			
		);
	}
}