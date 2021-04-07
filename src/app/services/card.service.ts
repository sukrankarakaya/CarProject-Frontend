import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl="https://localhost:44390/api/"


  constructor(private httpClient:HttpClient) { }

  getCards():Observable<listResponseModel<Card>>{
    let newPath =this.apiUrl +"cards/getall"
    return this.httpClient.get<listResponseModel<Card>>(newPath); 
  
  }

  getById(cardId:number):Observable<listResponseModel<Card>>{
    let newPath =this.apiUrl +"cards/getbyid?id="+cardId
    return this.httpClient.get<listResponseModel<Card>>(newPath); 
  
  }

}


 