import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/environments/environmen';
import { APIResponse, IMovie } from 'src/app/models/models';
import { HttpService } from 'src/app/services/http.service';

interface Category {
  value: string;
  viewValue: string;
}


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public sort!: string;
  public movies!: IMovie[];
  public basePoster = environment.IMG_URL_POSTER 
  private routeSub!: Subscription;
  private movieSub!: Subscription;
  public searchTerm!:string;

  constructor(
    private httpservice: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    
  ) { }
   

  ngOnInit(): void {
   this.routeSub =  this.activatedRoute.params.subscribe((params: Params)=>{
      if (params['movie-search']) {
         this.searchTerm = params['movie-search']
        this.searchMovies(params['movie-search']);
      
      
      } else {
        this.getListOfMovies();
        console.log('empty');
        
      }
    })
   
    
  }
  getListOfMovies(sort?:string){
    this.httpservice
      .fetchMovies( sort)
      .subscribe((movieList: APIResponse<IMovie>) => {
        this.movies = movieList.results;
      });
  }

  searchMovies( search?: string): void {
  this.movieSub =  this.httpservice
      .searchMovie(search)
      .subscribe((movieList: APIResponse<IMovie>) => {
        this.movies = movieList.results;
      });
}
  
   openGameDetails(id: string): void {
   this.router.navigate(['film', id]);
}
   
 ngOnDestroy(): void {
 if (this.movieSub) {
    this.movieSub.unsubscribe();
   }

  if (this.routeSub) {
    this.routeSub.unsubscribe();
  }
}


}