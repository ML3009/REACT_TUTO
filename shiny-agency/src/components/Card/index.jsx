import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Component } from 'react';
// import { useState } from 'react';
// import { useTheme } from '../../utils/hooks';

const CardLabel = styled.span`
		color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
		font-size: 22px;
		font-weight: normal;
		padding-left: 15px;
`;

const CardTitle = styled.span`
		color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
		font-size: 22px;
		font-weight: normal;
		align-self: center;
		height: 25px;
		display: flex;
		align-items: center;
`;

const CardImage = styled.img`
		height: 150px;
		width: 150px;
		align-self: center;
		border-radius: 50%;
`;

const CardWrapper = styled.div`
		display: flex;
		flex-direction: column;
		padding: 15px;
		background-color: ${({ theme }) =>
				theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
		border-radius: 30px;
		width: 350px;
		height: 300px;
		transition: 200ms;
		&:hover {
				cursor: pointer;
				box-shadow: 2px 2px 10px #e2e3e9;
		}
`;


class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFavorite: false,
		}
	}

	setFavorite = () => {
		this.setState({ isFavorite: !this.state.isFavorite })
	}

	render () {
		const { theme, picture, label, title } = this.props;
		const { isFavorite } = this.state;
		const star = isFavorite ? '⭐️' : '';

		return (
			<CardWrapper 
				theme={theme} 
				onClick={this.setFavorite}>
				<CardLabel theme={theme}>{label}</CardLabel>
						<CardImage src={picture} alt="freelance" />
						<CardTitle theme={theme}>
								{star} {title} {star}
						</CardTitle>
			</CardWrapper>

		)
	}
}

Card.propTypes = {
		label: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		picture: PropTypes.string.isRequired,
		theme: PropTypes.string.isRequired,
};

Card.defaultProps = {
		title: 'ML',
		label: "En recherche active d' un stage",
		picture: DefaultPicture,
		theme: 'light',
};

export default Card;


// function Card({ label, title, picture }) {
// 		const { theme } = useTheme();
// 		const [isFavorite, setIsFavorite] = useState(false);
// 		const star = isFavorite ? '⭐️' : '';

// 		return (
// 				<CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
// 						<CardLabel theme={theme}>{label}</CardLabel>
// 						<CardImage src={picture} alt="freelance" />
// 						<CardTitle theme={theme}>
// 								{star} {title} {star}
// 						</CardTitle>
// 				</CardWrapper>
// 		);
// }

