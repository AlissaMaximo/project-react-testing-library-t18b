import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Testando o componente <App.js />', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação.',
    () => {
      renderWithRouter(<App />);

      const homeEl = screen.getByRole('link', { name: 'Home' });
      const aboutEl = screen.getByRole('link', { name: 'About' });
      const favsEl = screen.getByRole('link', { name: 'Favorite Pokémons' });

      expect(homeEl).toBeInTheDocument();
      expect(aboutEl).toBeInTheDocument();
      expect(favsEl).toBeInTheDocument();
    });

  it(`Teste se a aplicação é redirecionada para a página inicial,
  na URL / ao clicar no link Home da barra de navegação.`,
  () => {
    const { history } = renderWithRouter(<App />);
    const homeEl = screen.getByRole('link', { name: 'Home' });

    userEvent.click(homeEl);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  it(`Teste se a aplicação é redirecionada para a página de About,
   na URL /about, ao clicar no link About da barra de navegação.`,
  () => {
    const { history } = renderWithRouter(<App />);
    const aboutEl = screen.getByRole('link', { name: 'About' });

    userEvent.click(aboutEl);

    const { pathname } = history.location;

    expect(pathname).toBe('/about');
  });

  it(`Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,
   na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação.`,
  () => {
    const { history } = renderWithRouter(<App />);
    const favsEl = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(favsEl);

    const { pathname } = history.location;

    expect(pathname).toBe('/favorites');
  });

  it(`Teste se a aplicação é redirecionada para a página Not Found
   ao entrar em uma URL desconhecida.`,
  () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    expect.stringContaining('Page requested not found');
  });
});
