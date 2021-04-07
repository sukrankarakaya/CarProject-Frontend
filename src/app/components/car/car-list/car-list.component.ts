import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[];
  brands:Brand[]=[];
  brandId:number;
  
  colors:Color[]=[];
  colorId:number;
  dataLoaded = false;

  carUpdateForm: FormGroup;
  carDeleteForm: FormGroup;
  selectedCar: Car;
  Description:string;

  constructor(private carService:CarService,
    private colorService:ColorService,
    private brandService:BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }



  ngOnInit(): void {
    this.getCars();
    this.getColors();
    this.getBrands();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands= response.data 

    })
  }


  setSelectedCarToUpdate(car:Car){
    this.selectedCar=car;
    this.updateCreateForm();
   }
   updateCreateForm(){
    this.carUpdateForm=this.formBuilder.group({
      carId:[this.selectedCar.carId,Validators.required],
      carName:[this.selectedCar.carName,Validators.required],
      colorId:[this.selectedCar.colorId,Validators.required],
      brandId:[this.selectedCar.brandId,Validators.required],
      dailyPrice:[this.selectedCar.dailyPrice,Validators.required],
      modelYear:[this.selectedCar.modelYear,Validators.required],
      description:[this.selectedCar.description,Validators.required]
    })
   }
   setSelectedCarToDelete(car:Car){
    this.selectedCar=car;
    console.log(this.setSelectedCarToDelete)
    this.deleteCreateForm();
   }
   deleteCreateForm(){
    this.carDeleteForm=this.formBuilder.group({
      carId:[this.selectedCar.carId,Validators.required],
      carName:[this.selectedCar.carName,Validators.required],
      brandName:[this.selectedCar.brandName,Validators.required],
      colorName:[this.selectedCar.colorName,Validators.required],
      dailyPrice:[this.selectedCar.dailyPrice,Validators.required],
      modelYear:[this.selectedCar.modelYear,Validators.required],
      description:[this.selectedCar.description,Validators.required]
      
    })
    console.log(this.carDeleteForm)
   }
   
   updateCar(){
    if(this.carUpdateForm.valid){
      let carModel=Object.assign({},this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(
        (response)=>{
          this.toastrService.success(response.message,"Success")
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (responseError)=>{if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
   }
   deleteCar(){
    if(this.carDeleteForm.valid){
      let carModel=Object.assign({},this.carDeleteForm.value)
      this.carService.delete(carModel).subscribe(
        (response)=>{
          this.toastrService.success(response.message,"Success")
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (responseError)=>{
          if(responseError.error.Errors.length>0){
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage,
                "Authendication Problem")
            }
          }
        })
        
    }
    else{
      this.toastrService.warning("Formu eksıksız doldurun","Update Failed!")
    }
   }
    

}
