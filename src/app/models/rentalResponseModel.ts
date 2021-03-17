import { ResponseModel } from "./responseModel";
import { Rental} from "./rental"

export interface rentalResponseModel extends ResponseModel{
  data:Rental[];
}
