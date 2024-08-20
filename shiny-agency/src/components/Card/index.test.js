import Card from './';
import { ThemeProvider } from '../../utils/context';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Card', () => {
	it('should render without crash', async () => {
		render(
			<ThemeProvider>
				<Card />
			</ThemeProvider>
		)
	})
	it('should render title and picture', async () => {
		render(
			<ThemeProvider>
				<Card
					title="Harry Potter"
					label="Magicien frontend"
					picture="/myPicture.png"
				/>
			</ThemeProvider>
		)
		const cardPicture = screen.getByRole('img');
		const cardTitle = screen.getByText(/Harry/i);
		expect(cardPicture.src).toBe('http://localhost/myPicture.png');
		expect(cardTitle.textContent).toBe(' Harry Potter ');
	})

	it('should add ⭐️ around title', async () => {
		render(
			<ThemeProvider>
				<Card
				  title="Harry Potter"
				  label="Magicien frontend"
				  picture="/myPicture.png"
				/>
			</ThemeProvider>
		)
		const cardTitle = screen.getByText(/Harry/i);
		const parentNode = cardTitle.closest('div');
		fireEvent.click(parentNode);
		expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️');
	})
})
