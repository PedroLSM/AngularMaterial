import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  
  constructor() { }

  ngOnInit() {
  }

  submit(f){
    console.log(f);
  }

}
