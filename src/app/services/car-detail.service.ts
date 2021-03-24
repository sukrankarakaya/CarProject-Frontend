import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44390/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number){
    let newPath= this.apiUrl+"cars/getdetaildto?carId="+ carId
    return this.httpClient.get<listResponseModel<Car>>(newPath)
  }

}

