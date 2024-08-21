import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors'



class EmailInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
	}

	updateInputValue = (value) => {
		this.setState({ inputValue: value });
	};

	render() {
		const { theme } = this.props;
		return (
			<div>
				{this.state.inputValue}
				<input
					onChange={(e) => this.updateInputValue(e.target.value)}
				/>
			</div>
		);
	}
}

export default EmailInput;
