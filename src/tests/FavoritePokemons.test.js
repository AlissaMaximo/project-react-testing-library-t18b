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

    const message = screen.getByText('No favorite pokemon found');

    expect(message).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados.',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/pokemons/25');

      let favLabel = screen.getByLabelText('Pokémon favoritado?');

      userEvent.click(favLabel);

      history.replace('/pokemons/10');

      favLabel = screen.getByLabelText('Pokémon favoritado?');

      userEvent.click(favLabel);

      history.replace('/favorites');

      const totalFavPokemons = screen.getAllByTestId('pokemon-name').length;
      const NUMBER_TWO = 2;

      expect(totalFavPokemons).toBe(NUMBER_TWO);
    });
});
