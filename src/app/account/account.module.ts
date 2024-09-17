import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountRoutingModule} from "./account-routing.module";
import {LoginComponent} from "./component";
import {NzImageModule} from "ng-zorro-antd/image";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    // LoginComponent,
    // NzImageModule
  ],
  // providers:[
  //   {provide: NzImageModule}
  // ]
})
export class AccountModule { }
