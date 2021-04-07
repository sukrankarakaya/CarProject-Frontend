import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';


@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {



  colorAddForm:FormGroup;
  colors:Color[]=[];
  color:Color;

  colorName:string;



  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService

    ) { }

  ngOnInit(): void {
    this.createColorAddForm();

  }

  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      colorName:["", Validators.required]
      

    })
  }

  add(){
    if (this.colorAddForm.valid) {
      let colorModel=Object.assign({},this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(data=>{
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
