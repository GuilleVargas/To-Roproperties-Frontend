import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from './form.component';


const routes: Routes = [
    { path: "", component: FormComponent},
  
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class FormRoutingModule { }