import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateUserComponent } from './private-user.component';


const routes: Routes = [
    { path: "", component: PrivateUserComponent},
  
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PrivateUserRoutingModule { }