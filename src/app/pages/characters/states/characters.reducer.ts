import { createReducer, createSelector, on } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';
import { getCharacterDetailSuccess, getCharactersSuccess } from './characters.action';

export interface CharacterState {
  characters: Character[];
}

export const initialState: CharacterState = {
  characters: [],
};

export const characterReducer = createReducer(
  initialState,
  on(getCharactersSuccess, (state, ch) => {
    console.log(ch);
    return {
      ...state,
      characters: ch.characters,
    };
  }),


  on(getCharacterDetailSuccess, (state, ch) => {
    console.log(ch);
    return {
      ...state,
      character: ch.character,
    };
  })
);
