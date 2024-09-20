import {Component} from '@angular/core';
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzIconDirective, NzIconModule} from 'ng-zorro-antd/icon';
import {NgOptimizedImage} from "@angular/common";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzImageDirective, NzImageModule, NzImageService} from "ng-zorro-antd/image";
import {NzImageViewComponent} from "ng-zorro-antd/experimental/image";
import {NzMessageService} from "ng-zorro-antd/message";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {setLoginUser} from "../../../shared/functions";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzFlexDirective,
    NzButtonComponent,
    NzDividerComponent,
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzIconDirective,
    NgOptimizedImage,
    NzCheckboxComponent,
    NzFormDirective,
    NzRowDirective,
    NzInputDirective,
    NzImageModule,
    // NzImageDirective,
    // NzImageViewComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }

    let userName = this.validateForm.controls['userName'].value;
    let password = this.validateForm.controls['password'].value;
    if(userName=='hgf' && password ==='123'){
      // localStorage.setItem('loginUser', 'hgf')
      this.cookieService.set('loginUser', 'hgf');
      setLoginUser('hgf')

      if(this.router ){
      }
      this.ms.success('登录成功')
    }else{
      this.ms.error('登录失败')
    }

  }

  constructor(private fb: NonNullableFormBuilder, private ms: NzMessageService, private cookieService: CookieService, private router: Router) {

  }
}
