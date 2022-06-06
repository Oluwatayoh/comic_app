import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  EMPTY,
  exhaustMap,
  from,
  map,
  of,
  switchMap,
} from 'rxjs';
import { DataService } from 'src/app/services/dataService.service';
import { getEpisodes, getEpisodesSuccess } from './episodes.action';

@Injectable()
export class EpisodeEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEpisodes),
      exhaustMap(() =>
        this.dataService.getEpisodes().pipe(
          map((ep) => getEpisodesSuccess({ episodes: ep })),
          catchError(() => EMPTY)
        )
      )
    )
  );


}
