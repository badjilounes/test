import { Component, OnInit } from '@angular/core';
import {ILogin, LoginService} from '../../service/login/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private loginSrv: LoginService, private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  login(): void {
    const input: ILogin = {username: this.form.value.username, password: this.form.value.password};
    this.loginSrv.login(input).toPromise().then(token => console.log(token), error => console.error(error));
  }

  showPassword(): void {
    alert(this.form.value.password);
  }

}
