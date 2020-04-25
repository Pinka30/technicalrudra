import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LaptopComponent } from './laptop/laptop.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { AllbrandsService } from './../assets/services/allbrands.service';
import { ScienceNtechComponent } from './home/science-ntech/science-ntech.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { OuterspinnerComponent } from './outerspinner/outerspinner.component';
import { DigitalmarkComponent } from './digitalmark/digitalmark.component';


const routes: Routes = [
  { 
    path: '',
    // redirectTo:'./home',
    // pathMatch: 'full' 
    component: HomeComponent
  },
  {
    path:'home',
    // component:HomeComponent
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path:'smartphones',
    component:SmartphonesComponent
    // loadChildren: './smartphones/smartphones.component#SmartphonesModule'
  },
  {
    path:'gadgets',
    component:GadgetsComponent
  },
  {
    path:'science-ntech',
    component:ScienceNtechComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'laptop',
    component: LaptopComponent
  },
  {
    path:'digitalmark',
    component: DigitalmarkComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { 
    path: '**',
    component: MainpageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    MainpageComponent,
    LaptopComponent,
    FooterComponent,
    SmartphonesComponent,
    GadgetsComponent,
    OuterspinnerComponent,
    DigitalmarkComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,    
    RouterModule.forRoot(routes),
    HomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [ AllbrandsService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
 
}
