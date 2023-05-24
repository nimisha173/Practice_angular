import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive_form';
  constructor(private fb:FormBuilder){

  }
  submit=false;
  // generate scheam
  registrationForm=this.fb.group
  ({
    firstname:['it master',Validators.required],
    lastname:['',Validators.required],
    phone:['',Validators.required,Validators.pattern('[0-9]{10}')],
    email:['',Validators.required,Validators.email]
  })
  // f return controls from schema
  get f(){
    return this.registrationForm.controls;

  }
  onsubmit(){
    console.log("clicked")
    this.submit=true
  }
}
