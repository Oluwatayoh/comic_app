import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
import { getEpisodes } from './states/episodes.action';
import { EpisodeState } from './states/episodes.reducer';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  animations: [
    trigger('panelInOut', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(800),
      ]),
      transition('* => void', [
        animate(800, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class EpisodesComponent implements OnInit {
  filter: string = '';
  config: any;
  epi: Episode[] = [];

  episodeSubscription: any = new Subscription();

  constructor(private store: Store<{ episodes: EpisodeState }>) {
    this.store.dispatch(getEpisodes());
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
  }

  ngOnInit(): void {
    this.episodeSubscription = this.store
      .select('episodes')
      .subscribe((data) => {
        this.epi = data.episodes;
      });
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  ngOnDestroy() {
    if (this.episodeSubscription) {
      this.episodeSubscription.unsubscribe();
    }
  }
}
