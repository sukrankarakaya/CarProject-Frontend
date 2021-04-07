import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl="https://localhost:44390/api/"
  
  constructor(private httpClient:HttpClient) { }
 
  getCars():Observable<listResponseModel<Car>>{
    let newPath =this.apiUrl +"cars/getall"
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  
  getCarDetail(carId:number):Observable<listResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getdetaildto?carId="+ carId
    return this.httpClient.get<listResponseModel<Car>>(newPath)
  }

  // getCarDetailCarId(carId:number):Observable<listResponseModel<Car>>{
  //   let newPath =this.apiUrl +"cars/getdetaildto?carId="+ carId
  //   return this.httpClient.get<listResponseModel<Car>>(newPath);
  // }
  

  getCarsByColor(colorId:number):Observable<listResponseModel<Car>>{
    let newPath =this.apiUrl +"cars/getbycolor?colorId="+colorId
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<listResponseModel<Car>>{
    let newPath =this.apiUrl +"cars/getbybrand?brandId="+brandId
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }


  getCarsByColorandBrand(brandId:number, colorId:number): Observable<listResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolorandbrand?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  add(car:Car): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  
  delete(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/delete",car)
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car)
  }



}
