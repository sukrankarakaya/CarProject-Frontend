import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiRentalUrl="https://localhost:44390/api/rentals/getdetaildto"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    return this.httpClient.get<listResponseModel<Rental>>(this.apiRentalUrl)
  }
}
