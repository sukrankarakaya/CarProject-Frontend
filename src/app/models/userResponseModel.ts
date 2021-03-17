import { ResponseModel } from "./responseModel";
import { User } from "./user";

export interface userResponseModel extends ResponseModel{
    data:User[]
}