import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { TrainingComponent } from '../training/training.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'training', component: TrainingComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
