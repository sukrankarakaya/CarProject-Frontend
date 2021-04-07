import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
 
  apiRentalUrl="https://localhost:44390/api/"


  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    let newPath =this.apiRentalUrl +"rentals/getdetaildto"
    return this.httpClient.get<listResponseModel<Rental>>(newPath); 
  
  }
  
  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiRentalUrl+"rentals/add",rental); 
  
  }
  

  

  
}
