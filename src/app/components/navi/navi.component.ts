import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  isVerified: boolean = false;
  userName: string
  claim: string;

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStroangeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.IsUserVerified();
    if (this.isVerified) {
      this.getUserName();
      this.getUserClaim();
    }
  }

  IsUserVerified() {
    if (this.authService.isAuthenticted()) {
      this.isVerified = true;
    } else {
      this.isVerified = false;
    }
  }

  getUserName() {
    this.userName = this.localStorageService.getUserNameDecodeToken();
  }

  getUserClaim() {
    this.claim = this.localStorageService.getClaimsDecodeToken();
  }

  logOut() {
    this.localStorageService.removeLocalStorage("token");
    this.toastrService.info("Çikiş yapıldı.", "info");
    this.ngOnInit();
  }

}
