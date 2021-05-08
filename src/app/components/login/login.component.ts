import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStroangeService } from 'src/app/services/local-Stroange-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:User;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private localStorage: LocalStroangeService,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    this.createLoginForm();

  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]

    })
  }

  login() {
    if (this.loginForm.valid) {

      let loginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(response => {
        console.log(response);        this.toastrService.info("Giriş Başarılı")
        this.localStorage.setLocalStorage("token", response.data.token)
        this.localStorage.getLocalStorage('email');
        //this.getByEmail(this.user.email)
      }, responseError => {

        this.toastrService.error(responseError.error);

      })
    }
   
    console.log(this.user)
  }

  getByEmail(email:string){
    this.userService.getByMail(email).subscribe(response=>{
      this.localStorage.setLocalStorage("email", response.data.toString())
      console.log(response.data)
    })
  }



}
