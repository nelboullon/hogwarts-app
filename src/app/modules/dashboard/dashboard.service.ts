import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) {
    this.get();
  }

  get(): Observable<any[]> {
    const characters = this._http.get('http://hp-api.herokuapp.com/api/characters/');
    const students = this._http.get('http://hp-api.herokuapp.com/api/characters/students');
    const teachers = this._http.get('http://hp-api.herokuapp.com/api/characters/staff');

    return forkJoin([characters, students,teachers]);
  }


}
