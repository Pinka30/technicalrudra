import { Component, OnInit } from '@angular/core';
import { AllBrands } from '../all-brands/all-brands';
import { AllbrandsService } from '../../../assets/services/allbrands.service';

@Component({
  selector: 'latest-stories',
  templateUrl: './latest-stories.component.html',
  styleUrls: ['./latest-stories.component.css']
})
export class LatestStoriesComponent implements OnInit {

  lateststory: AllBrands[];
  errorMessage: string;
  constructor(private lateststories: AllbrandsService) { }

  ngOnInit() {
    this.getLatestService();
  }

  getLatestService(){
    this.lateststories.latestStories()
        .then(lateststory => {
          this.lateststory = lateststory;
        })
        .catch(error => this.errorMessage = <any>error);
  }

}
