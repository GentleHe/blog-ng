import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {RESPONSE_CODE} from "../constant";
import {NzNotificationService} from "ng-zorro-antd/notification";

/**
 * 全局异常处理器，处理 Angular 运行时中的未捕获异常
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  /**
   * 构造函数，进行一些组件注入
   * @param router 路由组件，控制跳转等
   * @param message 消息组件，用于弹出消息
   * @param notification 通知组件，用于进行通知
   */
  constructor(private router: Router, private message: NzMessageService, private notification: NzNotificationService) {
  }

  handleError(error: Error): void {
    // console.log('******************');
    // console.error(error);
    // console.log('******************');

    // this.message.error(error.message);
    // console.log(`${JSON.stringify(error)}`);
    // console.log(`error: ${JSON.stringify(error)}`)

    if (error instanceof HttpErrorResponse) {
      switch (error.status) {

        case RESPONSE_CODE.NotAuthorized: {
          console.log(`${error.url} 请求未授权，现跳转登录页`);
          this.router.navigate(['signIn'], undefined).then(r => {
            if (r) {
              console.log(`跳转登录页成功`);
            }
          });
          break;
        }
        case RESPONSE_CODE.Error: {
          // this.message.error(error.error.message);
          this.notification.create("error", "出现了服务器内部错误", error.error.message, {nzPlacement: 'bottomRight'});
          // this.notification
          //   .blank(
          //     'Notification Title',
          //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
          //   )
          //   .onClick.subscribe(() => {
          //   console.log('notification clicked!');
          // });
          break;
        }
        default: {
          console.log(`${error.url} 的响应状态码未知: ${error.status}`);
          break;
        }
      }
    }


    if (error instanceof HttpErrorResponse) {
      const index = error.url?.lastIndexOf('authentication/require');
      // console.log(`httpErrorResponse ${index}`);
      if (index !== -1) {
        this.message.error('未登录或登录信息过期，请重新登录！');
        this.router.navigateByUrl('/signIn');
      }
    }

  }

}
