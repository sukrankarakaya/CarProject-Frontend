import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStroangeService } from 'src/app/services/local-Stroange-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  Authenticated:boolean;
  users: User[];

  constructor(private authService:AuthService,
    private userService:UserService,
    private toastrService:ToastrService,
    private localStorageService:LocalStroangeService) { }

  ngOnInit(): void {
    //this.isAuthenticated();
    this.getByMail();

  }


  
  isAuthenticated(){
    return this.authService.isAuthenticted()
  }


  logOut() {
    this.localStorageService.clean();
    this.toastrService.info('Çıkış Yapıldı', 'Bilgi');
    setTimeout(function () {
      location.reload();
    }, 400);
  }

  getByMail(){
    this.userService.getByMail(String(this.localStorageService.get('email'))).subscribe(r=>{
      this.users = r.data
      console.log(this.users)
    })
  }


}
