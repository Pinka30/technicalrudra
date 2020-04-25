import { Component } from '@angular/core';

@Component({
  selector: 'digitalmark',
  templateUrl: './digitalmark.component.html',
  styleUrls: ['./digitalmark.component.css']
})
export class DigitalmarkComponent {

  constructor() { }

  // ngOnChanges() {
  //   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
  //     document.getElementById("scrollToTopBtn").style.display = "block";
  //   } else {
  //     document.getElementById("scrollToTopBtn").style.display = "none";
  //   }
  // }
  // scrollToTop(){
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth"
  //   })
  // }

}
