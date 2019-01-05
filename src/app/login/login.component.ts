import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    }
  );

  get email(){
    return this.form.get("email");
  }

  get senha(){
    return this.form.get("senha");
  }

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.form);
    
  }

}
