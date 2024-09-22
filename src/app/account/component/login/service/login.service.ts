import {Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {setLoginUser} from "../../../../shared";

@Injectable({
  providedIn: 'root'
})
export class LoginService{


  constructor(private cookieService: CookieService, private injector: Injector) {
  }

  get route() {
    // 注册 Router 服务
    return this.injector.get(Router);
  }



  logout(): void{
    console.log('退出登录操作');
    this.cookieService.delete('loginUser')
    setLoginUser(null)
    // this.router.onSameUrlNavigation = 'reload'
    // this.router.
    // this.router.navigate([''], {
      // onSameUrlNavigation: 'reload'
    // })

    const curentUrl = this.route.url;  // 获取当前页面的路由地址
// `client` 这个路由要根据你项目的默认根路径修改
// skipLocationChange 这个配置一定要配置，不然会发生页面跳转的效果
    this.route.navigateByUrl('/111', { skipLocationChange: true }).then(() => {
      this.route.navigateByUrl(curentUrl); // 重新导航到当前页面路由
    });

  }
}
