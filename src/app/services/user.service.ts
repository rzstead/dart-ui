import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(id: string): Observable<HttpResponse<User>> {
    return this.http.get<User>(environment.apiLocation + "/user/" + id, { observe: 'response' });
  }
}
