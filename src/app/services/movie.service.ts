import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: WebApiService) { }

  getMovies(): Observable<any> {
    return this.apiService.get<Movie>(`assets/movies.json`);
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.apiService.get<Movie>(`/${id}`);
  }

}
