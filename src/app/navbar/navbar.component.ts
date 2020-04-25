import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickMenu(){
    document.getElementById("shortmenubar").classList.toggle("change");
    document.getElementById("shortmenunav").classList.toggle("change");    
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

}
