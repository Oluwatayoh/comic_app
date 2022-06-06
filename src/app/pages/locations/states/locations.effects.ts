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
import { getLocations, getLocationsSuccess } from './locations.action';

@Injectable()
export class LocationEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLocations),
      exhaustMap(() =>
        this.dataService.getLocations().pipe(
          map((lc) => getLocationsSuccess({ locations: lc })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
