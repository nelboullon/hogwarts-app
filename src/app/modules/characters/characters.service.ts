import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from './chatacter.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient) { }

  url = 'http://hp-api.herokuapp.com/api/characters';

  getAll(): Observable<ICharacter[]> {
    return this._http.get<ICharacter[]>(this.url);
  }
  getByHouse(house: string): Observable<ICharacter[]>{
    return this._http.get<ICharacter[]>(`${this.url}/house/${house}`);
  }
}
