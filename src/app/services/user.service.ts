import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUserUrl="https://localhost:44390/api/users/getall"
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<listResponseModel<User>>{
    return this.httpClient.get<listResponseModel<User>>(this.apiUserUrl)
  }


}
