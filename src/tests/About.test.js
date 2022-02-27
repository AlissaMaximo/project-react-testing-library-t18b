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

      const aboutEl = screen.getByRole('link', { name: 'About Pokédex' });

      expect(aboutEl).toBeInTheDocument();
    });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/about');

      const text1 = /This application simulates a Pokédex,/
      + / a digital encyclopedia containing all Pokémons/;
      const infoP1El = screen.getByRole('paragraph', { name: text1 });
      const text2 = /One can filter Pokémons by type,/
      + / and see more details for each one of them/;
      const infoP2El = screen.getByRole('paragraph', { name: text2 });

      expect(infoP1El).toBeInTheDocument();
      expect(infoP2El).toBeInTheDocument();
    });

  it('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.',
    () => {

    });
});
