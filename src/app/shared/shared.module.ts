import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {BaseComponent, PageNotFoundComponent} from './components';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BaseFormComponent } from './components';
import {SharedRoutingModule} from "./shared-routing.module";
import { ColumnFilterComponent } from './control';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzTreeViewModule} from "ng-zorro-antd/tree-view";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";



@NgModule({
  declarations: [
    PageNotFoundComponent,
    BaseComponent,
    BaseFormComponent,
    ColumnFilterComponent,
    // TreeViewComponent,
    // CommonUploadComponent,
    // IconViewComponent,
    // DataTreeSelectComponent,
  ],
    imports: [
        CommonModule,
        NzTableModule,
        SharedRoutingModule,
        NzInputModule,
        FormsModule,
        NzUploadModule,
        NzTreeViewModule,
        NzDropDownModule
    ],
  exports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    ColumnFilterComponent,
  ]
})
export class SharedModule {

}
