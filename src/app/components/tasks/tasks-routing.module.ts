import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from './tasks.component';


const routes: Routes = [
    { path: "", component: TasksComponent},
  
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class TasksRoutingModule { }