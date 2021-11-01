import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovie } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/environments/environmen';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
   movieID!:string
   movie!: IMovie
   roteSub!: Subscription
   backdrop!:string 
   poster!:string
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private httService: HttpService
  ) { }

  ngOnInit(): void {
    this.roteSub = this.ActivatedRoute.params.subscribe((params:Params)=>{
      this.movieID = params['id']
      console.log(this.movieID);
      this.getMovieDetails(this.movieID)
    })
  }
   

    getMovieDetails(id:string):void{
      this.httService
      .getDetails(id)
      .subscribe((movie: IMovie) => {
  
      
        this.movie = movie
        this.backdrop = environment.IMG_URL_BACKDROP +movie.backdrop_path
        this.poster = environment.IMG_URL_POSTER + movie.poster_path
      });
    }
 


}
