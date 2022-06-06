import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Locations } from 'src/app/models/location.model';
import { getLocations } from './states/locations.action';
import { LocationState } from './states/locations.reducer';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
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
export class LocationsComponent implements OnInit {
  filter: string = '';
  config: any;
  lca: Locations[] = [];

  locationSubscription: any = new Subscription();

  constructor(private store: Store<{ locations: LocationState }>) {
    this.store.dispatch(getLocations());
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
  }

  ngOnInit(): void {
    this.locationSubscription = this.store
      .select('locations')
      .subscribe((data) => {
        this.lca = data.locations;
      });
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  ngOnDestroy() {
    if (this.locationSubscription) {
      this.locationSubscription.unsubscribe();
    }
  }
}
