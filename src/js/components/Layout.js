import React from 'react';

export default class Layout extends React.Component {
	render() {
		return (
			<div class='container-fluid'>
				<div class='row'>
					<div class='col-xs-12 col-md-4 col-md-offset-4 vcenter'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}