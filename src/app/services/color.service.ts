import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiColorUrl="https://localhost:44390/api/"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<listResponseModel<Color>>{

    let newPath = this.apiColorUrl + "colors/getall"  ;
    return this.httpClient.get<listResponseModel<Color>>(newPath)  }

  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiColorUrl+"colors/add",color)
  }

  delete(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiColorUrl+"colors/delete",color)
  }

  update(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiColorUrl+"colors/update",color)
  }
}
