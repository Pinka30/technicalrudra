import { Component, OnInit } from '@angular/core';
import { AllBrands } from '../all-brands/all-brands';
import { AllbrandsService } from '../../../assets/services/allbrands.service';

@Component({
  selector: 'science-ntech',
  templateUrl: './science-ntech.component.html',
  styleUrls: ['./science-ntech.component.css']
})

export class ScienceNtechComponent implements OnInit {

  technews: AllBrands[];
  errorMessage: string;
  constructor(private scienceNtech: AllbrandsService) { }

  ngOnInit() {
    this.getTechNews();
  }

  getTechNews(){
    this.scienceNtech.scienceNtech()
        .then(techNews => this.technews = techNews)
        .catch(error => this.errorMessage = <any>error);
  }

}
