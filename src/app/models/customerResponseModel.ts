import { Customer } from "./customer";
import { ResponseModel } from "./responseModel";

export interface CostemerResponseModel  extends ResponseModel{
    data:Customer[]
}