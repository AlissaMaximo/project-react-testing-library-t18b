import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found 😭;',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/pagina/que-nao-existe');

      const message = screen.getByRole('heading', {
        name: 'Page requested not found Crying emoji', level: 2 });

      expect(message).toBeInTheDocument();
    });

  it('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/pagina/que-nao-existe');

      const image = screen.getByAltText(/Pikachu crying because the page requested/,
        / was not found/);

      expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    });
});
