import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon.',
    () => {
      renderWithRouter(<App />);
    });

  it(`Teste se o card do Pokémon indicado na Pokédex contém um
   link de navegação para exibir detalhes deste Pokémon.
   O link deve possuir a URL /pokemons/<id>, onde <id> é o id do Pokémon exibido;`,
  () => {
    renderWithRouter(<App />);
  });

  it(`Teste se ao clicar no link de navegação do Pokémon,
   é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.`,
  () => {
    renderWithRouter(<App />);
  });

  it(`Teste também se a URL exibida no navegador muda para
   /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver;`,
  () => {
    renderWithRouter(<App />);
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados.',
    () => {
      renderWithRouter(<App />);
    });
});
