import { Component } from '@angular/core';
// import { Validators } from '@angular/forms';
import { user } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  onsubmit() {
    // Your logic for handling form submission goes here
    alert(JSON.stringify(this.data))
    console.log('Form submitted');
  }
  data = {
    firstname:'',
    lastname:'',
    phone:'',
    email:''
  }
}
