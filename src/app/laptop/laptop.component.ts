import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  
  errorMsg: string;
  laptopData: Map<string,string>;

  constructor(private fbLaptops: AngularFireDatabase ) {}

  ngOnInit(){        
    this.fbLaptops.database.ref('/Laptops').orderByKey().once('value').then(snapshot => {    
      this.laptopData = snapshot.val();    
    });    
  }
}

