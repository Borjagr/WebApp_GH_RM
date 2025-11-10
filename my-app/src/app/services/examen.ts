import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitHub } from '../interfaces/examen.interfaces';
import { Locations } from '../interfaces/examen.interfaces';

@Injectable({
  providedIn: 'root'
})
export class Examen {

  constructor( public http: HttpClient) { }

  urlGitHub: string = 'https://api.github.com/search/users?q=';
  urlLocations: string = 'https://rickandmortyapi.com/api/location/?type=';

public getUsers(term: string): Observable<GitHub> {
  return this.http.get<GitHub>(`${this.urlGitHub}${term}`);
}

public getLocations(term: string): Observable<Locations> {
  return this.http.get<Locations>(`${this.urlLocations}${term}`);
}

}
