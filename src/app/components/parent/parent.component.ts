import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, OnDestroy {
  textInParent:string = "";
  msgFromChild:any = "";
  recievMsg(event:any){
    this.msgFromChild = event;
    // console.log(1 + "2" + "2");
    // console.log(1 + +"2" + "2");
    // console.log(1 + -"1" + "2");
    console.log(+"1" + "1" + "2");
    // console.log("A" - "B" + "2");
    
  }

  ngOnInit(): void {
      // console.log("Parent OnInit Data");
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log("parent OnChanges Data", changes);
      
  }

  ngOnDestroy(): void {
      // console.log("Parent Destroy Hook");
      
  }

}
