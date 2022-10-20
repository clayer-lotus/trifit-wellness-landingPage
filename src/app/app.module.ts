import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { OurTrainersComponent } from './components/our-trainers/our-trainers.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AsSeenOnComponent } from './components/as-seen-on/as-seen-on.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { OfferComponent } from './components/offer/offer.component';
import { MoreAboutUsComponent } from './components/more-about-us/more-about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OurTrainersComponent,
    TestimonialsComponent,
    PricingComponent,
    ContactUsComponent,
    AsSeenOnComponent,
    AboutUsComponent,
    FooterComponent,
    OfferComponent,
    MoreAboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
