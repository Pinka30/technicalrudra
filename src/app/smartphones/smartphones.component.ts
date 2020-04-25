import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

  errorMsg: string;
  mobileData: Map<string, string>;
  showSpinner: boolean=true;

  constructor( private fbMobiles: AngularFireDatabase) { }

  ngOnInit() {
    var logo;
    this.fbMobiles.database.ref('/Mobiles').orderByKey().once('value').then(snapshot => {
      this.mobileData = snapshot.val();  
      // console.log(this.mobileData); 
      this.showSpinner = false;  
    });
  }
}
