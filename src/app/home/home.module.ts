import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LatestStoriesComponent } from './latest-stories/latest-stories.component';
import { PopularMobilesComponent } from './popular-mobiles/popular-mobiles.component';
import { AllBrandsService } from './all-brands/all-brands.service';
import { AllBrandsModule } from './all-brands/all-brands.module';
import { AllBrandsComponent } from './all-brands/all-brands.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopmobilesComponent } from './topmobiles/topmobiles.component';
import { ScienceNtechComponent } from './science-ntech/science-ntech.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { SmartphonesComponent } from '../smartphones/smartphones.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'all-brands',
        component:AllBrandsComponent
      },
      {
        path:'topmobiles',
        component:TopmobilesComponent
      },
      {
        path:'latest-stories',
        component:LatestStoriesComponent
      },
      {
        path:'science-ntech',
        component:ScienceNtechComponent
      },
      {
        path:'popular-mobiles',
        component:PopularMobilesComponent
      },           
      {
        path:'smartphones',
        component:SmartphonesComponent
      },
      {
        path:'mobiledetails/:mobileName',
        component:MobileDetailsComponent
      },
      {
        path:'mobiledetails',
        component:MobileDetailsComponent
      },
      // {
      //   path:'singleproduct/:mobileInfo',
      //   component:SingleproductComponent
      // }
      {
        path:'singleproduct/:mobileTitle/:submobileTitle',
        component:SingleproductComponent
      }
    ]
  } 
];

@NgModule({
  imports: [
    CommonModule,
    AllBrandsModule,
    NgbModule,
    RouterModule.forChild(routes),
    
  ],
  exports: [
    RouterModule,
    SpinnerComponent
  ],
  declarations: [
    HomeComponent,
    PopularMobilesComponent,
    LatestStoriesComponent,
    AllBrandsComponent,
    CarouselComponent,
    TopmobilesComponent,
    ScienceNtechComponent,
    MobileDetailsComponent,
    SingleproductComponent,
    SpinnerComponent
    
  ],
  providers: [AllBrandsService]
})
export class HomeModule { }
