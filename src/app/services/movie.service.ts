import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Replace with your actual API key from OMDb
  private apiKey = 'be9c9ee7';
  private url = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.url}?apikey=${this.apiKey}&s=${query}`);
  }
}