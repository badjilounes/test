import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

export interface ILogin {
  username: string;
  password: string;
}

export interface OLogin {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private api: ApiService) {}

  login(input: ILogin): Observable<OLogin> {
    return this.api.post('login', input);
  }

  getUser(): Observable<User> {
    return this.api.get('user');
  }

}
