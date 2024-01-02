import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDataRoutingModule } from './main-data-routing.module';
import { DictionaryTypeComponent } from './components';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared";
import { NoSiderContainerComponent } from './components/no-sider-container/no-sider-container.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import { DictionaryTypeFormComponent } from './components';
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzUploadModule} from "ng-zorro-antd/upload";


@NgModule({
  declarations: [
    DictionaryTypeComponent,
    NoSiderContainerComponent,
    DictionaryTypeFormComponent
  ],
    imports: [
        CommonModule,
        MainDataRoutingModule,
        NzButtonModule,
        NzWaveModule,
        NzDatePickerModule,
        NzFormModule,
        NzGridModule,
        NzInputModule,
        ReactiveFormsModule,
        SharedModule,
        NzDropDownModule,
        FormsModule,
        NzPopconfirmModule,
        NzCheckboxModule,
        NzRadioModule,
        NzDividerModule,
        NzPopoverModule,
        NzUploadModule
    ]
})
export class MainDataModule { }
