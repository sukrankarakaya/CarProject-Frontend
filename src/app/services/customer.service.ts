import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiCustomerUrl="https://localhost:44390/api/"

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<listResponseModel<Customer>>{
    let newPath =this.apiCustomerUrl +"customers/getall"
    return this.httpClient.get<listResponseModel<Customer>>(newPath)
  }
  
  getCustomerDto():Observable<listResponseModel<Customer>>{
    let newPath =this.apiCustomerUrl +"customers/getdetaildto"
    return this.httpClient.get<listResponseModel<Customer>>(newPath);
  }
}
