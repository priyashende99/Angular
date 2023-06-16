import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  parentInputText:string = "Priya";

  @Output()
  sendMsgEmitter = new EventEmitter();
  sendMsgToParent(event: any) {
    // const message: string = event.target.value;
    this.sendMsgEmitter.emit(event.target.value);
    
    // Rest of your code
  }

  ngOnInit(): void {
      console.log("Child On Init Hook");
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("child onChanges Hook", changes);
      
  }

  ngOnDestroy(): void {
      console.log("Child onDestroy Hook");
      
  }
}
