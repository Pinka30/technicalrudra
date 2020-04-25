import { Component, OnInit } from '@angular/core';
import { AllBrands } from '../all-brands/all-brands';
import { AllbrandsService } from '../../../assets/services/allbrands.service';

@Component({
  selector: 'topmobiles',
  templateUrl: './topmobiles.component.html',
  styleUrls: ['./topmobiles.component.css']
})

export class TopmobilesComponent implements OnInit {
  
  topmobilebrands: AllBrands[];
  errorMessage: string;
  constructor(private topmobiles: AllbrandsService) { }

  ngOnInit() {
    this.getTopMobiles();
  }

  getTopMobiles(){
    this.topmobiles.topMobiles()
        .then(topmobiles => {
          this.topmobilebrands = topmobiles;
        })
        .catch(error => this.errorMessage = <any>error);
  }

}
