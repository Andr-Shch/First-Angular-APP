import { IMovie } from 'src/app/models/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/app/environments/environmen';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies!: IMovie[]
  public basePoster = environment.IMG_URL_POSTER

  //pass data to perent component
  @Output() getIdEvent = new EventEmitter<string>()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  sendTermToPerent(term:string){
    this.getIdEvent.emit(term)
  }

  
}
