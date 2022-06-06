import { createReducer, createSelector, on } from '@ngrx/store';
import { Episode } from 'src/app/models/episode.model';
import { getEpisodeDetailSuccess, getEpisodesSuccess } from './episodes.action';

export interface EpisodeState {
  episodes: Episode[];
}

export const initialState: EpisodeState = {
  episodes: [],
};

export const episodeReducer = createReducer(
  initialState,
  on(getEpisodesSuccess, (state, ep) => {
    return {
      ...state,
      episodes: ep.episodes,
    };
  }),

  on(getEpisodeDetailSuccess, (state, ep) => {
    return {
      ...state,
      episode: ep.episode,
    };
  })
);
