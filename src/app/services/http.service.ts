

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment, POPULAR_BASE_URL, SEARCH_BASE_URL, SORT_URL } from '../environments/environmen';


//import { POPULAR_BASE_URL } from '../environments/environmen';
import { APIResponse, IMovie } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 

  constructor(private http: HttpClient) { }

   fetchMovies(
     // search?:string,
      sort?:string
   ):Observable<APIResponse<IMovie>>{
    if (sort){
       return this.http.get<APIResponse<IMovie>>(`${SORT_URL}${sort}&page=${1}`)
    }
     return this.http.get<APIResponse<IMovie>>(`${POPULAR_BASE_URL}&page=${1}`)
   }
   
    searchMovie(param:string):Observable<APIResponse<IMovie>>{
      
    
      return this.http.get<APIResponse<IMovie>>(SEARCH_BASE_URL+param)
    }
   
}
