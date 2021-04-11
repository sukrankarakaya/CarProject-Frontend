import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
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

  
  // userupdate(registerModel:RegisterModel):Observable <SingleResponseModel<TokenModel>>{

  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  
  // }


  getByMail(email:string):Observable<listResponseModel<User>>{
    let newPath =this.apiUrl +"users/getbyemail?email="+
    this.localStroangeService.get('email');
    return this.httpClient.get<listResponseModel<User>>(newPath);
  }



  
}
