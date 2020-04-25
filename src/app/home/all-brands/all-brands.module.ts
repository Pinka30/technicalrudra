import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBrandsComponent } from './all-brands.component';

const routes:Routes = [
  {
    path:'all-brands',
    component: AllBrandsComponent,    
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AllBrandsModule { }
