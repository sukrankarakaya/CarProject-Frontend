
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarImage } from "../models/carImage";
import { listResponseModel } from "../models/listResponseModel";

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44390/api/"

  constructor(private httpClient:HttpClient) { }

 getCarImageCarId(carId:number):Observable<listResponseModel<CarImage>>{
   let newPath=this.apiUrl+"carImages/getbycarıd?carId="+carId
   return this.httpClient.get<listResponseModel<CarImage>>(newPath)
 }
}