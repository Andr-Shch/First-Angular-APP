import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/my-validators/my-validators';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // inputValue:string = ''
  form!:FormGroup
  constructor(private router: Router) { 
   
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      input: new FormControl('', [
        Validators.required, 
        Validators.minLength(2),
        MyValidators.forbidenName])
    })
  }
 
 onSubmit(){
   console.log(this.form);
   
  console.log( this.form.value.input);
  if(this.form.valid){
    this.router.navigate(['search', this.form.value.input])
    this.form.reset()
  }
  // if(f.value.search===''){return}
  // else{
  // this.router.navigate(['search', f.value.search])
  // console.log(this.router.navigate);
  // f.reset()
  // }
 }


}
