import { createReducer, createSelector, on } from '@ngrx/store';
import { Locations } from 'src/app/models/location.model';
import { getLocationDetailSuccess, getLocationsSuccess } from './locations.action';

export interface LocationState {
  locations: Locations[];
}

export const initialState: LocationState = {
  locations: [],
};

export const locationReducer = createReducer(
  initialState,
  on(getLocationsSuccess, (state, lc) => {
    console.log(lc);
    return {
      ...state,
      locations: lc.locations,
    };
  }),


  on(getLocationDetailSuccess, (state, lc) => {
    console.log(lc);
    return {
      ...state,
      location: lc.location,
    };
  })
);
