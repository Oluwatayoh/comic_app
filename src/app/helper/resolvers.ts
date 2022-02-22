import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

// @Injectable()
// export class shoppingCategoriesResolver implements Resolve<Observable<any[]>> {
//   constructor(private _data: AdsService) {}
//   public resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<any[]> {
//     return this._data.getAdsCategories();
//   }
// }
