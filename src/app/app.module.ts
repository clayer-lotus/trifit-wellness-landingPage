import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
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
import { ClientResultComponent } from './components/client-result/client-result.component';
import { BlackFridayComponent } from './components/black-friday/black-friday.component';

import { NgxSpinnerModule } from 'ngx-spinner';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgToastModule } from "ng-angular-popup";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
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
    MoreAboutUsComponent,
    ClientResultComponent,
    BlackFridayComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgToastModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
