import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {getLoginUser, setLoginUser} from "../../../shared";
import {LoginService} from "../../../account";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  isCollapsed=true;


  constructor(private router: Router, private cookieService: CookieService, protected loginService: LoginService) {
    // this.cookieService = cs;
    // this.router = router;
  }

  loginUser: string |null = null;
  ngOnInit(): void {
    console.log('homeContainer初始化');
    this.loginUser = getLoginUser()
  }


  goLogin() {
      console.log(this.router.url);
      this.router.navigate(['/account/login'], {queryParams: {whereFrom: this.router.url}});

  }
}
