import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  const pokemonName = 'pokemon-name';

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
    const NUMBER_NINE = 9;
    const NUMBER_TEN = 10;
    const nextPokemonButton = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(nextPokemonButton).toBeInTheDocument();

    let currentPokemon = screen.getByTestId(pokemonName).innerHTML;
    const pokemons = [];

    pokemons.push(currentPokemon);

    for (let i = 0; i < NUMBER_NINE; i += 1) {
      userEvent.click(nextPokemonButton);
      currentPokemon = screen.getByTestId(pokemonName).innerHTML;
      pokemons.push(currentPokemon);
    }

    const firstPikachu = pokemons[0];
    const secondPikachu = pokemons[9];

    expect(pokemons.length).toBe(NUMBER_TEN);
    expect(firstPikachu).toBe(secondPikachu);
  });

  it('Teste se é mostrado apenas um Pokémon por vez.',
    () => {
      renderWithRouter(<App />);

      const NUMBER_EIGHT = 8;
      const nextPokemonButton = screen.getByRole('button', { name: 'Próximo pokémon' });
      expect(nextPokemonButton).toBeInTheDocument();

      let currentPokemonAmount = screen.getAllByTestId(pokemonName).length;

      const pokesPerPages = [];

      pokesPerPages.push(currentPokemonAmount);

      for (let i = 0; i < NUMBER_EIGHT; i += 1) {
        userEvent.click(nextPokemonButton);
        currentPokemonAmount = screen.getAllByTestId(pokemonName).length;
        pokesPerPages.push(currentPokemonAmount);
      }

      const onlyOne = pokesPerPages.every((amount) => amount === 1);

      expect(onlyOne).toBe(true);
    });

  it('Teste se a Pokédex tem os botões de filtro.',
    () => {
      renderWithRouter(<App />);
      const NUMBER_EIGHT = 8;
      const NUMBER_SEVEN = 7;
      /* 1º círculo */
      let correctType = true;
      const types = [
        'All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
      const buttons = screen.getAllByRole('button');
      const typesButtonsTexts = [];

      buttons.forEach((button, i) => {
        if (i < NUMBER_EIGHT) {
          typesButtonsTexts.push(button.innerHTML);
        }
      });

      typesButtonsTexts.forEach((typeButtonText, i) => {
        if (typeButtonText !== types[i]) {
          correctType = false;
        }
      });

      expect(correctType).toBe(true);

      /* 2º, 3º e 4º círculos */
      const areCorrectTypes = [];
      const isAllPresent = [];
      for (let i = 1; i < NUMBER_EIGHT; i += 1) {
        userEvent.click(buttons[i]); // clica apenas em tipo específico
        const curType = screen.getAllByTestId('pokemon-type'); // pega todos os pokemons na página e cada tipo
        areCorrectTypes
          .push(curType.every((pokemon) => pokemon.innerHTML === buttons[i].innerHTML)); // verifica se o tipo do pokemon é igual ao tipo do botão.

        const allButton = screen.getByRole('button', { name: 'All' });
        if (allButton.innerHTML === 'All') {
          isAllPresent.push('true');
        }
      }

      const areAllTrue = areCorrectTypes.every((bool) => bool === true);
      expect(areAllTrue).toBe(true);
      expect(isAllPresent.length).toBe(NUMBER_SEVEN);
    });

  it('Teste se a Pokédex contém um botão para resetar o filtro.',
    () => {
      renderWithRouter(<App />);
    });
});
