import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserComponent } from './components/user/user.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';

import {ToastrModule} from "ngx-toastr";
import { FilterComponent } from './components/filter/filter.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { from } from 'rxjs';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CardComponent } from './components/card/card.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { CarListComponent } from './components/car/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    NaviComponent,
    BrandComponent,
    CustomerComponent,
    UserComponent,
    RentalComponent,
    CarDetailComponent,
    FilterPipePipe,
    FilterColorPipe,
    FilterComponent,
    RentalAddComponent,
    CarAddComponent,
    ColorAddComponent,
    CardComponent,
    BrandAddComponent,
    ColorListComponent,
    BrandListComponent,
    CarListComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
