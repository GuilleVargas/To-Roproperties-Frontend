import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { GeneralComponent } from './pages/general/general.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: "",
    component: GeneralComponent
  },
 {
   path: "signin",
   loadChildren: () => import('src/app/components/signin/signin.module').then(m => m.SigninModule) 
},
{
  path: "signup",
  loadChildren: () => import('src/app/components/signup/signup.module').then(m => m.SignupModule) 
},
{
  path: "private-user",
  loadChildren: () => import('src/app/pages/private-user/private-user.module').then(m => m.PrivateUserModule),
  canActivate: [AuthGuard] 
},
{
  path: "tasks",
  loadChildren: () => import('src/app/components/tasks/tasks.module').then(m => m.TasksModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}