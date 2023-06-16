import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy, OnChanges {

  firstNum:number = 0;
  secondNum:number = 0;
  output:number = 0;
  previousPageValue:number = 0;

  counter:number = 0;
  interval:any;

  constructor(private router: Router, private sharedService: SharedService){

  }

  calculate(){   
    this.output = this.sharedService.calculate(this.firstNum, this.secondNum);
    this.previousPageValue = this.sharedService.firstPageValue;
  }

  ngOnInit(): void {
    console.log(" Child On InIT Hook display here");

    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      // console.log(this.counter);
      
    }, 1000)
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Child OnChanges Data: ",changes);
      
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
      console.log("Child OnDestroy Hook is called");
      
  }

  firstCalc(){
    this.router.navigate(['calculator-first']);
  }

}
