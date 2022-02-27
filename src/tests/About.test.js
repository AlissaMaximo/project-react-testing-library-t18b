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

    });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.',
    () => {

    });

  it('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.',
    () => {

    });
});
