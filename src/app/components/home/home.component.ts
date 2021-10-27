import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

 
  constructor(
    private httpservice: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
   

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      if (params['search']) {
      this.searchGames (params['search']);
   
      
      } else {
        this.searchGames('');
      }
    })
   
    
  }

  searchGames( search?: string): void {
   this.httpservice
      .fetchMovies(search)
      .subscribe((movieList: APIResponse<IMovie>) => {
  
        
        this.movies = movieList.results;
        
      });

}
  
   openGameDetails(id: string): void {
   this.router.navigate(['film', id]);
}
   
}