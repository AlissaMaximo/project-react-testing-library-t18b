import React from 'react';
import { screen } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event';
 */import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const pikachuURL = '/pokemons/25';

  it('Teste se é renderizado um card com as informações de determinado pokémon.',
    () => {
      renderWithRouter(<App />);
      const pikachuName = screen.getByTestId('pokemon-name').innerHTML;
      const pikachuType = screen.getByTestId('pokemon-type').innerHTML;
      const pikachuWeight = screen.getByTestId('pokemon-weight').innerHTML;
      const pikachuImg = screen.getByAltText('Pikachu sprite');

      expect(pikachuName).toBe('Pikachu');
      expect(pikachuType).toBe('Electric');
      expect(pikachuWeight).toBe('Average weight: 6.0 kg');
      expect(pikachuImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    });

  it(`Teste se o card do Pokémon indicado na Pokédex contém um
   link de navegação para exibir detalhes deste Pokémon.
   O link deve possuir a URL /pokemons/<id>, onde <id> é o id do Pokémon exibido;`,
  () => {
    renderWithRouter(<App />);
    const pikachuLink = screen.getByRole('link', {
      name: 'More details', src: pikachuURL });

    expect(pikachuLink).toBeInTheDocument();
  });

  it(`Teste se ao clicar no link de navegação do Pokémon,
   é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.`,
  () => {
    const { history } = renderWithRouter(<App />);
    const pikachuLink = screen.getByRole('link', {
      name: 'More details' });

    userEvent.click(pikachuLink);

    const { pathname } = history.location;

    expect(pathname).toBe(pikachuURL);
  });

  // O quarto item entra no terceiro.

  it('Teste se existe um ícone de estrela nos Pokémons favoritados.',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push(pikachuURL);

      const favCheckLabel = screen.getByLabelText('Pokémon favoritado?');

      userEvent.click(favCheckLabel);

      const starIcon = screen.getByAltText('Pikachu is marked as favorite');

      expect(starIcon).toHaveAttribute('src', '/star-icon.svg');
    });
});
