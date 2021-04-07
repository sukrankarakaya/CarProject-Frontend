import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;

  cars:Car[]=[];
  car:Car;
  brands:Brand[]=[];
  brandId:number;
  colors:Color[]=[];
  colorId:number;
  
  
  


  constructor(private formBuilder:FormBuilder,
   private carService:CarService,
   private colorService:ColorService,
   private brandService:BrandService,
   private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();

  }

  createCarAddForm(){

    this.carAddForm=this.formBuilder.group({
      colorId:["", Validators.required],
      brandId:["", Validators.required],
      modelYear:["", Validators.required],
      description:["", Validators.required],
      dailyPrice:["", Validators.required],

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

  add(){
   if (this.carAddForm.valid) {
      let carModel= Object.assign({},this.carAddForm.value) 
      this.carService.add(carModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
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



}
