import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
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
import { KundliComponent } from './kundli/kundli.component';
import { PalmistryComponent } from './palmistry/palmistry.component';
import { ReikiHealingComponent } from './reiki-healing/reiki-healing.component';
import { AstroExpertComponent } from './astro-expert/astro-expert.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { PoojanComponent } from './poojan/poojan.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SaleComponent } from './sale/sale.component';
import { TcComponent } from './tc/tc.component';
import { RefundsComponent } from './refunds/refunds.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ShoppingFaqComponent } from './shopping-faq/shopping-faq.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { EAstroLearnComponent } from './e-astro-learn/e-astro-learn.component';
import { PremiumServicesQueryComponent } from './premium-services-query/premium-services-query.component';
import { GiftPoojaComponent } from './gift-pooja/gift-pooja.component';
import { VastuConsultantComponent } from './vastu-consultant/vastu-consultant.component';
import { BookPanditComponent } from './book-pandit/book-pandit.component';
import { BookYatraComponent } from './book-yatra/book-yatra.component';
import { CartComponent } from './cart/cart.component';

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
    AstroSignComponent,
    KundliComponent,
    PalmistryComponent,
    ReikiHealingComponent,
    AstroExpertComponent,
    TeamComponent,
    TeamMemberComponent,
    PoojanComponent,
    DeliveryComponent,
    SaleComponent,
    TcComponent,
    RefundsComponent,
    PrivacyComponent,
    ShoppingFaqComponent,
    ShopComponent,
    ProductComponent,
    EAstroLearnComponent,
    PremiumServicesQueryComponent,
    GiftPoojaComponent,
    VastuConsultantComponent,
    BookPanditComponent,
    BookYatraComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
