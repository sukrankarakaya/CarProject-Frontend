import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CardComponent } from './components/card/card.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorComponent } from './components/color/color.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarDetailService } from './services/car-detail.service';

const routes: Routes = [
{path:"",pathMatch:"full", component:CarComponent},
{path:"cars", component:CarComponent},
{path:"cars/color/:colorId", component:CarComponent},
{path:"cars/color/:colorId/detail/:carId", component:CarDetailComponent},
{path:"cars/brand/:brandId", component:CarComponent},
{path:"cars/brand/:brandId/detail/:carId", component:CarDetailComponent},
{path:"cars/detail/:carId", component:CarDetailComponent},
{path:"cars/filter/:brandId/:colorId",component:CarComponent},
{path:"cars/filter/:brandId/:colorId/detail/:carId",component:CarDetailComponent},
{path:"cars/filter/:colorId/:brandId/detail/:carId/cars/rent",component:RentalComponent},
{path:"cars/color/:colorId/cars/rent", component:RentalComponent},
{path:"cars/color/:colorId/detail/:carId/cars/rent", component:RentalComponent},
{path:"cars/brand/:brandId/cars/rent", component:CarComponent},
{path:"cars/brand/:brandId/detail/:carId/cars/rent", component:RentalComponent},
{path:"cars/detail/:carId/cars/rent", component:RentalComponent},
{path:"cars/rentaladd/:carId",component:RentalAddComponent},
{path:"cars/card", component:CardComponent},
{path:"carDto", component:CarDetailService},


{path:"cars/add", component:CarAddComponent},

{path:"colors/add", component:ColorAddComponent},

{path:"brands/add", component:BrandAddComponent},

{path:"colors", component:ColorComponent},

{path:"colorList", component:ColorListComponent},

{path:"brandList", component:BrandListComponent},

{path:"carList", component:CarListComponent},





//{path:"cars/filter/:colorId/:brandId/detail/:carId/cars/rentaladd",component:RentalAddComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
