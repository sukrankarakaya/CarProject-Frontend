import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostemerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiCustomerUrl="https://localhost:44390/api/customers/getall"
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CostemerResponseModel>{
    return this.httpClient.get<CostemerResponseModel>(this.apiCustomerUrl)
  }
}
