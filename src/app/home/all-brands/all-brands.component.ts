import { Component, OnInit } from '@angular/core';
import { AllBrands } from './all-brands';
// import { AllBrandsMobile } from '../../../assets/services/allbrands';
// import { AllBrandsService } from './all-brands.service';
import { AllbrandsService } from '../../../assets/services/allbrands.service';

@Component({
  // moduleId:module.id,
  selector: 'all-brands',
  templateUrl: './all-brands.component.html',
  styleUrls: ['./all-brands.component.css']
})
export class AllBrandsComponent implements OnInit {
  // brand: AllBrands;
  brands: AllBrands[];
  errorMessage: string;
  constructor(private _allbrandsService: AllbrandsService) { }

  ngOnInit() {
    this.getAllBrands();
  }

  getAllBrands(){
    this._allbrandsService.allBrands()
        .then(brands => {
          // console.log(brands);
          this.brands = brands
        })
        .catch(error => this.errorMessage = <any>error );
        // .subscribe(
        //   (brands: AllBrands[])=>{
        //     console.log(brands);
        //     this.brands = brands
        //   },
        
  }

}
