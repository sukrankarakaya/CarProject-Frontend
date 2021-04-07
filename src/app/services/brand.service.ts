import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiBrandUrl="https://localhost:44390/api/"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>>{
    let newPath = this.apiBrandUrl + "brands/getall"  ;

    return this.httpClient.get<listResponseModel<Brand>>(newPath)
  }
  

  getCarsByColorandBrand(brandId:number, colorId:number): Observable<listResponseModel<Brand>>{
    let newPath = this.apiBrandUrl + "cars/getbycolorandbrand?brandId" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<listResponseModel<Brand>>(newPath);
  }
  
  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiBrandUrl+"brands/add",brand)
 
 }


  delete(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiBrandUrl+"brands/delete",brand)
  }

  update(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiBrandUrl+"brands/update",brand)
  }





}
