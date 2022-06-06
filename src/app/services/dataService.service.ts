import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from '../../environments/environment';
import { ApiResponse, Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = `${environment.baseURL}`;

  constructor(private http: HttpClient) {}

  getCharacter() {
    return this.http.get<ApiResponse>(`${this.baseUrl}/character`).pipe(
      map((data) => {
        var res: ApiResponse;
        res = data;
        return res.results;
      })
    );
  }

  getCharacterDetail(id: number) {
    return this.http.get<Character>(`${this.baseUrl}/character/${id}`).pipe(
      map((data) => {
        var res: Character;
        res = data;
        return res;
      })
    );
  }

  getEpisodes() {
    return this.http.get<ApiResponse>(`${this.baseUrl}/episode`).pipe(
      map((data) => {
        var res: ApiResponse;
        res = data;
        return res.results;
      })
    );
  }

  getLocations() {
    return this.http.get<ApiResponse>(`${this.baseUrl}/location`).pipe(
      map((data) => {
        var res: ApiResponse;
        res = data;
        return res.results;
      })
    );
  }
}
