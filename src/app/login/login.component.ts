import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined
  loading =  false
  submitted = false

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) { }

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
    let data = {
      email: formValue.username,
      password: formValue.password
    }
    let userToken;
    this.authService.login(data).subscribe((resp: any) => {
      localStorage.setItem('auth-token', resp.access_token);
      this.router.navigateByUrl('/home');
    },error => {
      this.loading = false;
      console.log(error);
    })
  }
}
