import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUserUrl="https://localhost:44390/api/users/getall"
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<userResponseModel>{
    return this.httpClient.get<userResponseModel>(this.apiUserUrl)
  }


}
