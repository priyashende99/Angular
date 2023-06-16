import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  isApproved: boolean = false;
  numbers:any = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten'
  ];
  luckyNumber:number = 0;
  
  
  approve(status:boolean){
    // console.log(status);
    this.isApproved = status;
  }
}
