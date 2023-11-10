import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictionaryTypeComponent} from "./components";

const routes: Routes = [{
  path:'dictionaryType',
  component: DictionaryTypeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDataRoutingModule { }
