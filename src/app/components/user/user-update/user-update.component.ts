import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {


  users:User[];
  


  userUpdateForm: FormGroup;
  selectedUser: User;



  constructor(private userService: UserService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.getUsers();
    

  }

getUsers(){
  this.userService.getUsers().subscribe((response)=>{
     this.users=response.data;
  })
}
  setSelectedUserToUpdate(user: User) {
    this.selectedUser = user;
    this.updateCreateForm();
  }

  updateCreateForm() {
    this.userUpdateForm = this.formBuilder.group({
      userId: [this.selectedUser.userId, Validators.required],
      firstName: [this.selectedUser.firstName, Validators.required],
      LastName: [this.selectedUser.lastName, Validators.required],
      email: [this.selectedUser.email, Validators.required],

    })
  }

  updateUser() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value)
      console.log(this.userUpdateForm)
      this.userService.update(userModel).subscribe(

        (response) => {
          this.toastrService.success("Kullanıcı Bilgileri Güncellendi.");

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                "Dogrulama Hatası!"
              )
            }
          }
        }

      )
    } else {
      this.toastrService.warning("Color Name Boş Geçilemez.", "Lütfen Formu Doldurun!")
    }
  }
}






