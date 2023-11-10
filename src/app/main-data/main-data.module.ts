import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDataRoutingModule } from './main-data-routing.module';
import { DictionaryTypeComponent } from './components';


@NgModule({
  declarations: [
    DictionaryTypeComponent
  ],
  imports: [
    CommonModule,
    MainDataRoutingModule
  ]
})
export class MainDataModule { }
