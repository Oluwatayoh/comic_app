import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/dataService.service';
import { getCharacters } from './states/characters.action';
import { CharacterState } from './states/characters.reducer';
// import { character, characterSelector } from './states/characters.selector';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
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
export class CharactersComponent implements OnInit {
  filter: string = '';
  config: any;
  char: Character[] = [];

  characterSubscription: any = new Subscription();
  constructor(
    private store: Store<{ characters: CharacterState }>
  ) {
    this.store.dispatch(getCharacters());
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
  }

  ngOnInit(): void {
    this.characterSubscription = this.store
      .select('characters')
      .subscribe((data) => {
        this.char = data.characters;
      });

    // this.character$ = this.store.select('characters');
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  ngOnDestroy() {
    if (this.characterSubscription) {
      this.characterSubscription.unsubscribe();
    }
  }
}
