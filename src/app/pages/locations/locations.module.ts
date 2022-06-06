import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from 'src/app/shared/shared.module';
import { locationReducer } from './states/locations.reducer';
import { LocationEffects } from './states/locations.effects';

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    StoreModule.forRoot({ locations: locationReducer }),
    EffectsModule.forRoot([LocationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 15 }),
    SharedModule,
  ],
})
export class LocationsModule {}
