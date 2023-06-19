import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {
  @ViewChild('myForm', {static: true}) myForm:any;
  constructor(){}
  onSubmit(myForm:any){
    console.log(myForm);
    this.myForm.reset();
  }
}
