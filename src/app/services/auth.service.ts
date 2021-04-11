import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44390/api/auth/"
  constructor(private httpClient:HttpClient,
  
    ) { }

  login(loginModel:LoginModel):Observable <SingleResponseModel<TokenModel>>{

    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }


  register(registerModel:RegisterModel):Observable <SingleResponseModel<TokenModel>>{

    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  
  }
  
  isAuthenticted(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }
}
