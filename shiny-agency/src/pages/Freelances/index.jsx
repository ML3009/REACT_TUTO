import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useFetch, useTheme } from '../../utils/hooks'
import { Loader, LoaderWrapper } from '../../utils/style/Atoms';

const CardsContainer = styled.div`
		display: grid;
		gap: 24px;
		grid-template-rows: 350px 350px;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		justify-items: center;
`;

const PageTitle = styled.h1`
		font-size: 30px;
		color: black;
		text-align: center;
		padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
		font-size: 20px;
		color: ${colors.secondary};
		font-weight: 300;
		text-align: center;
		padding-bottom: 30px;
		color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;


function Freelances() {

	const { theme } = useTheme();
		const { data, isLoading, error } = useFetch(
			`http://localhost:8000/freelances`
		)

		const freelancersList = data?.freelancersList

		if (error) {
				return <span>Oups il y a eu un probleme</span>;
		}

		return (
				<div>
						<PageTitle theme={theme}>Trouvez votre prestataire 💫</PageTitle>
						<PageSubtitle theme={theme}>
								Chez Shiny nous réunissions les meilleurs profils pour vous.
						</PageSubtitle>
						{isLoading ? (
								<LoaderWrapper>
										<Loader theme={theme} />
								</LoaderWrapper>
						) : (
								<CardsContainer>
										{freelancersList.map((profile) => (
												<Card
														key={`${profile.name}-${profile.id}`}
														label={`${profile.job}`}
														title={profile.name}
														picture={profile.picture}
												/>
										))}
								</CardsContainer>
						)}
				</div>
		);
}

export default Freelances;
