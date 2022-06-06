import { createAction, props } from '@ngrx/store';
import { ApiResponse, Character } from 'src/app/models/character.model';

export const getCharacters = createAction('[Characters] Get characters');
export const getCharacterDetail = createAction(
  '[Characters] Get character detail'
);

export const getCharactersSuccess = createAction(
  '[Characters] Get characters success',
  props<{ characters: Character[] }>()
);

export const getCharacterDetailSuccess = createAction(
  '[Characters] Get character details success',
  props<{ character: Character; id: number }>()
);
