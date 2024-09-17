import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeContainerComponent} from "./home";
import {NoSiderContainerComponent} from "./main-data/components/no-sider-container/no-sider-container.component";
import {LoginComponent} from "./account";
import {loginGuardGuard} from "./login-guard.guard";

const routes: Routes = [
  {path:'', component: HomeContainerComponent, loadChildren: () => import('./home').then(m => m.HomeModule)},
  {path:'system', component:HomeContainerComponent, loadChildren: ()=>import('./system').then((m => m.SystemModule)), canActivate: [loginGuardGuard]},
  {path:'shared', component:HomeContainerComponent, loadChildren: ()=>import('./shared').then((m => m.SharedModule))},
  {path:'main-data', component:HomeContainerComponent, loadChildren: ()=>import('./main-data').then((m => m.MainDataModule))},
  {path:'audit', component:HomeContainerComponent, loadChildren: ()=>import('./audit').then((m => m.AuditModule))},
  {path:'other', component:HomeContainerComponent, loadChildren: ()=>import('./other').then((m => m.OtherModule))},
  {path:'account', component:LoginComponent, loadChildren: ()=>import('./account').then((m => m.AccountModule))},
  {path:'**', redirectTo: 'shared/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
