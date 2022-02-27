import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Testando o componente <About.js />', () => {
  it('Teste se a página contém as informações sobre a Pokédex.',
    () => {
      renderWithRouter(<App />);
      const { history } = renderWithRouter(<App />);

      history.push('/about');

      const infoP1El = screen.getByText(/This application simulates a Pokédex,/,
        / a digital encyclopedia containing all Pokémons/);
      const infoP2El = screen.getByText(/One can filter Pokémons by type,/,
        / and see more details for each one of them/);

      expect(infoP1El).toBeInTheDocument();
      expect(infoP2El).toBeInTheDocument();
    });

  it('Teste se a página contém um heading h2 com o texto About Pokédex.',
    () => {
      renderWithRouter(<App />);
      const { history } = renderWithRouter(<App />);

      history.push('/about');

      const aboutEl = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });

      expect(aboutEl).toBeInTheDocument();
    });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/about');

      const infoP1El = screen.getByText(/This application simulates a Pokédex,/,
        / a digital encyclopedia containing all Pokémons/); // verifica se tem o texto
      const infoP2El = screen.getByText(/One can filter Pokémons by type,/,
        / and see more details for each one of them/); // verifica se tem o segundo texto
      const wordOccurence = screen.getAllByText(/pokémons/i).length; // a palavra pokémons aparece uma vez no link, uma vez no primeiro parágrafo, e uma vez no segundo. Isto foi feito pq não há Aria role de parágrafo, não há classname no section q contém os parágrafos nem nos parágrafos.
      const NUMBER_THREE = 3;

      expect(infoP1El).toBeInTheDocument();
      expect(infoP2El).toBeInTheDocument();
      expect(wordOccurence).toBe(NUMBER_THREE);
    });

  it('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/about');

      const pokedexImage = screen.getByAltText('Pokédex');

      expect(pokedexImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');

      // Referência: https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
    });
});
