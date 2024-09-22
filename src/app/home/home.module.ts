import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components';
import {SharedModule} from '../shared';
import {NzDropDownDirective, NzDropdownMenuComponent} from "ng-zorro-antd/dropdown";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";


@NgModule({
  declarations: [
    HomeContainerComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NzDropdownMenuComponent,
        NzDropDownDirective,
        NzAvatarComponent,
    ]
})
export class HomeModule { }
