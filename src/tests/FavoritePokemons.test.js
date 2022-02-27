import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it(`Teste se é exibido na tela a mensagem No favorite pokemon found, 
  se a pessoa não tiver pokémons favoritos.`,
  () => {
    const { history } = renderWithRouter(<App />);

    history.push('/favorites');
    expect.stringContaining('No favorite pokemon found');
  });

  it('Teste se é exibido todos os cards de pokémons favoritados.',
    () => {
      renderWithRouter(<App />);
    });
});
