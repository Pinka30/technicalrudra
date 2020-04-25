import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  errorMsg: string;
  mobileTitle: string;
  submobileTitle: string;
  singleProductDetails: Map<string, string>;
  showSpinner: boolean = true;
  constructor(private fbSingleProduct: AngularFireDatabase,
              private route: ActivatedRoute) { }

  ngOnInit() { 

   this.mobileTitle = this.route.snapshot.paramMap.get('mobileTitle');
   this.submobileTitle = this.route.snapshot.paramMap.get('submobileTitle');
    // console.log("firstParam: " + mobileTitle , "secondParam: " + submobileTitle);
    
    this.fbSingleProduct.database
    .ref('/Mobiles/'+ this.mobileTitle + '/' + this.submobileTitle)
    .orderByKey()
    .once('value')
    .then(snapshot => {
      this.singleProductDetails = snapshot.val();
      // console.log(this.singleProductDetails);
      this.showSpinner = false;
    })
    
  }

}
