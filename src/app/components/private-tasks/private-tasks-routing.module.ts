import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateTasksComponent } from './private-tasks.component';


const routes: Routes = [
    { path: "", component: PrivateTasksComponent},
  
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PrivateTasksRoutingModule { }