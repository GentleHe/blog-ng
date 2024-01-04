import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequestLogComponent} from "./component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {SharedModule} from "../shared";
import {AuditRoutingModule} from "./audit-routing.module";



@NgModule({
  declarations: [
    RequestLogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzModalModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzTableModule,
    NzUploadModule,
    NzWaveModule,
    ReactiveFormsModule,
    SharedModule,
    AuditRoutingModule
  ]
})
export class AuditModule { }
