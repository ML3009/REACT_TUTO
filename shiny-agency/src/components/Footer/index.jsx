import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'
import EmailInput from '../Email'

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 60px 0;
	`

const NightModeButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	color: ${colors.secondary};
	padding-top: 30px;
`

function Footer() {
	const { toggleTheme, theme } = useContext(ThemeContext)
	return (
		<FooterContainer>
			<EmailInput theme={theme} />
			<NightModeButton onClick={() => toggleTheme()}>
				Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
			</NightModeButton>
		</FooterContainer>
	)
}

export default Footer;
