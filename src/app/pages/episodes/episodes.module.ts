import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from 'src/app/shared/shared.module';
import { EpisodeEffects } from './states/episodes.effects';
import { episodeReducer } from './states/episodes.reducer';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,

    StoreModule.forRoot({ episodes: episodeReducer }),
    EffectsModule.forRoot([EpisodeEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 15 }),
    SharedModule,
  ],
})
export class EpisodesModule {}
