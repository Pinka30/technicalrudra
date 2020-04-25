import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mobiledetails',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {

  errorMsg: string;
  mobileData: Map<string, string>;
  mobileTitle: string
  showSpinner: boolean = true;
  constructor(private fbMobiles: AngularFireDatabase,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.mobileTitle = this.route.snapshot.paramMap.get('mobileName');

    this.fbMobiles.database.ref('/Mobiles/').orderByKey().once('value').then(snapshot => {
      this.mobileData = snapshot.val(); 
      this.showSpinner = false;
    });
    
  }
}
