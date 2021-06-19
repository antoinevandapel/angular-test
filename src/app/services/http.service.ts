import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movieModel';
import { APIResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getMovieList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Movie>> {
    let params = new HttpParams().set('ordering', ordering);

    if(search){
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Movie>>(`${env.BASE_URL}/movie/order/upcoming/`, {
      params: params,
    });
  }

  
}
