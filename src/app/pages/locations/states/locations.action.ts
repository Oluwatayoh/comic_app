import { createAction, props } from '@ngrx/store';
import { Locations } from 'src/app/models/location.model';

export const getLocations = createAction('[Locations] Get Locations');
export const getLocationDetail = createAction(
  '[Locations] Get Location detail'
);

export const getLocationsSuccess = createAction(
  '[Locations] Get Locations success',
  props<{ locations: Locations[] }>()
);

export const getLocationDetailSuccess = createAction(
  '[Locations] Get Location details success',
  props<{ location: Locations; id: number }>()
);
