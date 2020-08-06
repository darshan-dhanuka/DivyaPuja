import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreComponent } from './store/store.component';
import { ServicesComponent } from './services/services.component';
import { PremiumServicesComponent } from './premium-services/premium-services.component';
import { AstroComponent } from './astro/astro.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { ExtraServicesComponent } from './extra-services/extra-services.component';
import { TirthComponent } from './tirth/tirth.component';
import { PanditComponent } from './pandit/pandit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { AlertComponent } from './alert/alert.component';
import { PanditFormComponent } from './pandit-form/pandit-form.component';
import { AstroFormComponent } from './astro-form/astro-form.component';
import { AstroSignComponent } from './astro-sign/astro-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlertComponent,
    StoreComponent,
    ServicesComponent,
    PremiumServicesComponent,
    AstroComponent,
    FooterComponent,
    AboutusComponent,
    HeaderComponent,
    ZodiacComponent,
    ExtraServicesComponent,
    TirthComponent,
    PanditComponent,
  
    LoginComponent,
    RegisterComponent,
    PanditFormComponent,
    AstroFormComponent,
    AstroSignComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
