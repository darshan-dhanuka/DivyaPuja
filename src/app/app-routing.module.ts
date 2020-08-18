import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './service/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PanditFormComponent } from './pandit-form/pandit-form.component';
import { AstroFormComponent } from './astro-form/astro-form.component';
import { AstroSignComponent } from './astro-sign/astro-sign.component';
import { KundliComponent } from './kundli/kundli.component';
import { PalmistryComponent } from './palmistry/palmistry.component';
import { ReikiHealingComponent } from './reiki-healing/reiki-healing.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pandit-form', component: PanditFormComponent },
  { path: 'astro-form', component: AstroFormComponent },
  { path: 'astro-sign/:sign', component: AstroSignComponent,pathMatch: 'full'},
  { path: 'kundli', component: KundliComponent,pathMatch: 'full'},
  { path: 'palmistry', component: PalmistryComponent,pathMatch: 'full'},
  { path: 'reikihealing', component: ReikiHealingComponent,pathMatch: 'full'},
  // canActivate: [AuthGuard]
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
