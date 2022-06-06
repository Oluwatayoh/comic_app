import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  EMPTY,
  EmptyError,
  exhaustMap,
  from,
  map,
  of,
  switchMap,
} from 'rxjs';
import { DataService } from 'src/app/services/dataService.service';
import { getCharacterDetail, getCharacterDetailSuccess, getCharacters, getCharactersSuccess } from './characters.action';

@Injectable()
export class CharacterEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacters),
      exhaustMap(() =>
        this.dataService.getCharacter().pipe(
          map((cr) => getCharactersSuccess({ characters: cr })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // loadCharacterDetail$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getCharacterDetail),
  //     exhaustMap(() =>
  //       this.dataService.getCharacterDetail(id).pipe(
  //         map((cr) => getCharacterDetailSuccess({ character: cr })),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );
}
