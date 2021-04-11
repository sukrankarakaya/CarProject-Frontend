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
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';

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
{path:"cars/rentaladd/:carId",component:RentalAddComponent, canActivate:[LoginGuard]},
{path:"cars/card", component:CardComponent},
{path:"carDto", component:CarDetailService},


{path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
{path:"colors/add", component:ColorAddComponent, canActivate:[LoginGuard]},
{path:"brands/add", component:BrandAddComponent, canActivate:[LoginGuard]},

{path:"colorList", component:ColorListComponent, canActivate:[LoginGuard]},
{path:"brandList", component:BrandListComponent, canActivate:[LoginGuard]},
{path:"carList", component:CarListComponent, canActivate:[LoginGuard]},

{path:"login", component:LoginComponent},

{path:"register", component:RegisterComponent},
{path:"login/cars", component:LoginComponent},




//{path:"cars/filter/:colorId/:brandId/detail/:carId/cars/rentaladd",component:RentalAddComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
