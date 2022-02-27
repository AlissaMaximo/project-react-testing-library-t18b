import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons.',
    () => {
      renderWithRouter(<App />);

      const encounteredTitle = screen.getByRole('heading', {
        name: 'Encountered pokémons', level: 2 });

      expect(encounteredTitle).toBeInTheDocument();
    });

  it(`Teste se é exibido o próximo Pokémon da lista
   quando o botão Próximo pokémon é clicado.`,
  () => {
    renderWithRouter(<App />);

    const nextPokemonButton = screen.getByRole('button', { name: 'Próximo pokémon' });

    expect(nextPokemonButton).toBeInTheDocument();
  });

  it('Teste se é mostrado apenas um Pokémon por vez.',
    () => {
      renderWithRouter(<App />);
    });

  it('Teste se a Pokédex tem os botões de filtro.',
    () => {
      renderWithRouter(<App />);
    });

  it('Teste se a Pokédex contém um botão para resetar o filtro.',
    () => {
      renderWithRouter(<App />);
    });
});
