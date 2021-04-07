import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  dataLoaded=false;
  brands: Brand[] = [];
  colors: Color[] = [];
  colorId:number;
  brandId:number;


  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private brandService:BrandService,
    private colorService:ColorService
     ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"] && params["colorId"]){
        this.getCarsByBrandAndColor(params["brandId"], params["colorId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars()
      }
    })

  }

  getCars(){
   this.carService.getCars().subscribe(response=>{
     this.cars=response.data
    this.dataLoaded=true;
    });
  } 
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
     this.dataLoaded=true;
     });
   } 

   getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
     this.dataLoaded=true;
     });
   } 
  
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
     this.dataLoaded=true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
     this.dataLoaded=true;
    })
  }

  addToCart(car:Car){
    this.toastrService.success("Sepete Eklendi.",car.carName)
  }

  
  getCarsByBrandAndColor(brandId: number, colorId: number) {
    this.carService.getCarsByColorandBrand(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getSelectedColorId(colorId: number) {
    if (this.colorId == colorId) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedBrandId(brandId: number) {
    if (this.brandId == brandId) {
      return true;
    } else {
      return false;
    }
  }


}
