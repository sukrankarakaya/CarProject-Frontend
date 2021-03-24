import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
@Component({
  selector: 'app-cer-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail:Car[];
  carImage:CarImage[]=[];


  constructor(

    private carDetailService:CarDetailService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute

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
    this.carDetailService.getCarDetail(carId).subscribe((response)=>{
      this.carDetail=response.data;

    })
  }
  getCarImage(carId:number){
    this.carImageService.getCarImageCarId(carId).subscribe((response)=>{
      this.carImage=response.data;

    })
  }
  



}




