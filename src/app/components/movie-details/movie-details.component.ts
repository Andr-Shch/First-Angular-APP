import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovie } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
   movieID!:string;
   movie!: IMovie
   roteSub!: Subscription
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private httService: HttpService
  ) { }

  ngOnInit(): void {
    this.roteSub = this.ActivatedRoute.params.subscribe((params:Params)=>{
      this.movieID = params['id']
      console.log(this.movieID);
      
    })
  }
  
 


}
