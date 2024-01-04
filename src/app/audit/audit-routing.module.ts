import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RequestLogComponent} from "./component";

const routes: Routes = [{
  path: 'requestLog', component: RequestLogComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule{

}
