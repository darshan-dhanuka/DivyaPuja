import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
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
    PanditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
