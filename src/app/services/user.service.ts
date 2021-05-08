import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';
import { LocalStroangeService } from './local-Stroange-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getByEmail(email: string) {
    throw new Error('Method not implemented.');
  }



  apiUrl="https://localhost:44390/api/"
  constructor(private httpClient:HttpClient,
    private localStroangeService:LocalStroangeService,) { }

  getUsers():Observable<listResponseModel<User>>{
    let newPath =this.apiUrl +"users/getall"

    return this.httpClient.get<listResponseModel<User>>(newPath)
  }

  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"users/update",user)
  }


  getByMail(email:string):Observable<listResponseModel<User>>{
    let newPath =this.apiUrl +"users/getbyemail?email="+
    this.localStroangeService.getLocalStorage('email');
    return this.httpClient.get<listResponseModel<User>>(newPath);
  }



  
}
