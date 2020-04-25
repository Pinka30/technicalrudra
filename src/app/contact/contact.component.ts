import { Component } from '@angular/core';
import { FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  
  // isErrorState(control: FormControl | null,
  //              form: FormGroupDirective | NgForm | null): boolean{

  //   const isSubmitted = form && form.submitted;
  //   return !!(control & 
  //             control.invalid &&
  //             (control.dirty || control.touched || isSubmitted));            
  // }

  emailformControl = new FormControl('',[
    Validators.required,
    Validators.email
  ]);



}
