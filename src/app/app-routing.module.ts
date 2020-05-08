import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { GeneralComponent } from './pages/general/general.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';



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
    path: "private-tasks",
    loadChildren: () => import('src/app/components/private-tasks/private-tasks.module').then(m => m.PrivateTasksModule) 
 },
 {
   path: "tasks",
   loadChildren: () => import('src/app/components/tasks/tasks.module').then(m => m.TasksModule) 
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