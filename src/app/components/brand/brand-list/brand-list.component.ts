import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[];
  dataLoaded = false;

  brandUpdateForm: FormGroup;
  brandDeleteForm: FormGroup;
  selectedBrand: Brand;

  constructor(private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }



  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }
  setSelectedBrandToUpdate(brand:Brand) {
    this.selectedBrand = brand;
    this.updateCreateForm();
  }
  setSelectedBrandToDelete(brand:Brand) {
    this.selectedBrand = brand;
    this.deleteCreateForm();
  }
  updateCreateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.selectedBrand.brandId, Validators.required],
      brandName: [this.selectedBrand.brandName, Validators.required]
    })
  }
  deleteCreateForm() {
    this.brandDeleteForm = this.formBuilder.group({
      brandId: [this.selectedBrand.brandId, Validators.required],
      brandName: [this.selectedBrand.brandName, Validators.required]
    })
  }

  updateBrand() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value)
      console.log(this.brandUpdateForm, "color update formu")
      this.brandService.update(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, "Success");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                "Authendication Problem"
              )
            }
          }
        })
    }
    else {
      this.toastrService.warning("Color Name can not be null", "Update Failed!!")
    }
  }
  deleteBrand() {
    if (this.brandDeleteForm.valid) {
      let brandModel = Object.assign({}, this.brandDeleteForm.value)
      this.brandService.delete(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, "Success");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                "Authendication Problem"
              )
            }
          }
        })
    }
    else {
      this.toastrService.warning("Color Name can not be null", "Update Failed!!")
    }
  }

}
