import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Card } from 'src/app/models/card';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CardService } from 'src/app/services/card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm : FormGroup;


  rental:Rental[];
  rent:Rental;
  customers:Customer[];
  customer:Customer;
  car:Car;
  carId:number;
  cars:Car[]=[];
 
  
  
  dataLoaded=false;


  constructor(private formBuilder:FormBuilder,
    private activedRoute: ActivatedRoute,
    private rentalService:RentalService,
    private toastrService:ToastrService,
    private customerService:CustomerService,
    private carService:CarService,
   

    ) { }

  ngOnInit(): void {
    
    this.activedRoute.params.subscribe((params) => {
      this.getCarDetail(params['carId']);
      this.getCustomerDto()
     
    });    
  }

  async getCarDetail(carId:number){
  this.car=(await this.carService.getCarDetail(carId).toPromise()).data[0]
    this.createRentalAddForm();
  }
  
  
  getCustomerDto(){
    this.customerService.getCustomerDto().subscribe((response)=>{
      this.customers=response.data;
      console.log(response.data)
    });
  }


  createRentalAddForm(){
    this.rentalAddForm =this.formBuilder.group({
      carId:[{value:this.car.carId, disabled:true}],
      customerId:["", Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],

    

    })
  }
 

  add(){
    if (this.rentalAddForm.valid) {
      let rentalModel=Object.assign({}, this.rentalAddForm.getRawValue())
      this.rentalService.add(rentalModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage ,"Doğrulama hatası")
             
          }       
        } 
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  


  }

  

  




 
  


}
