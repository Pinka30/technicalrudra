import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  errorMsg: string;
  panasonicData: Map<string, string>;
  boatData: Map<string, string>;
  
  showSpinner: boolean = true;


  constructor(private fbGadgets: AngularFireDatabase,
    private route: Router) { }

  ngOnInit() {
      this.fbGadgets.database.ref('/Gadgets').orderByKey().once('value').then(snapshot => {
      this.boatData = snapshot.val();
      this.showSpinner = false;
    });
  }
}
