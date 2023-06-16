import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnChanges, OnInit, OnChanges {
  firstNum:number = 0;
  secondNum:number = 0;
  output:number = 0;

  constructor(private router: Router, private sharedService: SharedService){

  }

  calculate(){
    this.output = this.sharedService.calculate(this.firstNum, this.secondNum);
    this.sharedService.firstPageValue = this.output;
  }

  ngOnChanges(){
    console.log("On Changes Hook display here");
    
  }

  ngOnInit(){
    console.log("On InIT Hook display here");
  }

  secondCalc(){
    this.router.navigate(['calculator-second']);
  }

}
