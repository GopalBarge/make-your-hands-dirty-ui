import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

export const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'forgot-password',component: ForgotPasswordComponent},
  {path: '',redirectTo: '/login', pathMatch: "full"},
  {path: '**',component: NotFoundComponent}];