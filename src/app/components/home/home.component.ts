import { Component, OnInit } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public sort! : string;

  constructor() { }
   

  ngOnInit(): void {
  }

}
