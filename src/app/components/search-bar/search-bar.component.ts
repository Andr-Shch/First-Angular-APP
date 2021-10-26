import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // inputValue:string = ''
  constructor(private router: Router) { 
   
  }

  ngOnInit(): void {
  }
 
 onSubmit(f:NgForm){
  console.log(f.value.search);
  //this.inputValue = f.value.search
  this.router.navigate(['search', f.value.search])
  console.log(this.router.navigate);
  
 }


}
