import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
import { Observable } from 'rxjs';
import { POPULAR_BASE_URL } from '../environments/environmen';
import { APIResponse, IMovie } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 

  constructor(private http: HttpClient) { }

   fetchMovies(
     ordering:string,
     search?:string
   ):Observable<APIResponse<IMovie>>{
     
     let params = new HttpParams().set('ordering', ordering)
     
     if(search){
      params = new HttpParams().set('ordering', ordering).set('search', search)
     }
     

     return this.http.get<APIResponse<IMovie>>(`${POPULAR_BASE_URL}1`, {
       params:params
     })
   }

  
}
