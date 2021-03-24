import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiColorUrl="https://localhost:44390/api/colors/getall"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<listResponseModel<Color>>{
    return this.httpClient.get<listResponseModel<Color>>(this.apiColorUrl)
  }

}
