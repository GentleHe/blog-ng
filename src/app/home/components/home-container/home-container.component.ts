import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {getLoginUser, setLoginUser} from "../../../shared/functions";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  isCollapsed=true;

  cookieService: CookieService;
  router: Router;

  constructor(router: Router, private cs: CookieService) {
    this.cookieService = cs;
    this.router = router;
  }

  loginUser: string = '';
  ngOnInit(): void {
    this.loginUser = getLoginUser()
  }


  logout(): void{
    console.log('退出登录操作');
    this.cookieService.delete('loginUser')
    setLoginUser('')
    this.router.navigateByUrl('/')
  }

  goLogin() {
      console.log(this.router.url);
      this.router.navigate(['/account/login'], {queryParams: {whereFrom: this.router.url}});

  }
}
