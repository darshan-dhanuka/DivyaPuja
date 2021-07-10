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
import { AstroExpertComponent } from './astro-expert/astro-expert.component';
import { TeamComponent } from './team/team.component';
import { PoojanComponent } from './poojan/poojan.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { RefundsComponent } from './refunds/refunds.component';
import { TcComponent } from './tc/tc.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ShoppingFaqComponent } from './shopping-faq/shopping-faq.component';
import { SaleComponent } from './sale/sale.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { EAstroLearnComponent } from './e-astro-learn/e-astro-learn.component';
import { PremiumServicesQueryComponent } from './premium-services-query/premium-services-query.component';
import { GiftPoojaComponent } from './gift-pooja/gift-pooja.component';
import { VastuConsultantComponent } from './vastu-consultant/vastu-consultant.component';
import { BookPanditComponent } from './book-pandit/book-pandit.component';
import { BookYatraComponent } from './book-yatra/book-yatra.component';
import { CartComponent } from './cart/cart.component';
import { WidgetComponent } from './widget/widget.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pandit-form', component: PanditFormComponent },
  { path: 'astro-form', component: AstroFormComponent },
  { path: 'astro-sign/:sign', component: AstroSignComponent,pathMatch: 'full'},
  { path: 'kundli', component: KundliComponent},
  { path: 'palmistry', component: PalmistryComponent},
  { path: 'reikihealing', component: ReikiHealingComponent},
  { path: 'astro-expert', component: AstroExpertComponent},
  { path: 'director', component: TeamComponent},
  { path: 'poojan', component: PoojanComponent},
  { path: 'delivery', component: DeliveryComponent},
  { path: 'refunds', component: RefundsComponent},
  { path: 'terms', component: TcComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'sale', component: SaleComponent},
  { path: 'shoppingFAQs', component: ShoppingFaqComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'shop/product/:prod_id', component: ProductComponent},
  { path: 'eastrolearn', component: EAstroLearnComponent},
  { path: 'premium-service-query', component: PremiumServicesQueryComponent},
  { path: 'giftpooja', component: GiftPoojaComponent},
  { path: 'vastu-consultant', component: VastuConsultantComponent},
  { path: 'book-pandit', component: BookPanditComponent},
  { path: 'book-yatra', component: BookYatraComponent},
  { path: 'cart', component: CartComponent},
  { path: 'widget', component: WidgetComponent},
  { path: 'checkout', component: CheckoutComponent},
  // canActivate: [AuthGuard]
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
