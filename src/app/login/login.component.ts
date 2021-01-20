import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined
  loading =  false
  submitted = false 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm?.invalid) {
      return;
    }
    this.loading = true;
    let formValue = this.loginForm?.value;
  }
}
