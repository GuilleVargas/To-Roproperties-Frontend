import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { GeneralComponent } from './pages/general/general.component';



const routes: Routes = [
  {
    path: "",
    component: GeneralComponent
  },
  {
     path: "form",
     loadChildren: () => import('src/app/pages/form/form.module').then(m => m.FormModule) 
  },
 {
   path: "signin",
   loadChildren: () => import('src/app/components/signin/signin.module').then(m => m.SigninModule) 
},
{
  path: "signup",
  loadChildren: () => import('src/app/components/signup/signup.module').then(m => m.SignupModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}