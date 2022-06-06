import { createAction, props } from '@ngrx/store';
import { Episode } from 'src/app/models/episode.model';

export const getEpisodes = createAction('[Episode] Get Episodes');
export const getEpisodeDetail = createAction(
  '[Episode] Get episode detail'
);

export const getEpisodesSuccess = createAction(
  '[Episode] Get Episode success',
  props<{ episodes: Episode[] }>()
);

export const getEpisodeDetailSuccess = createAction(
  '[Episode] Get episode details success',
  props<{ episode: Episode; id: number }>()
);
