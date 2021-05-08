import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
@Component({
  selector: 'app-cer-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail:Car[];
  carImage:CarImage[]=[];
  cars:Car;



  constructor(
    
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private rentalService:RentalService,
    private CarService:CarService,
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImage(params['carId']);
      }
    });
  
  }
  getCarDetail(carId:number){
    this.CarService.getCarDetail(carId).subscribe((response)=>{
      this.carDetail=response.data;
    })
  }
  
  getCarImage(carId:number){
    this.carImageService.getCarImageCarId(carId).subscribe((response)=>{
      this.carImage=response.data;
    })
  }

  
  addToCart(carDetail:Car){
    this.toastrService.success("Next...",carDetail.carName)
  }
 
}




