import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolistAngular';

  constructor(){
    setTimeout(() => {
      this.title = "First Angular Project";
    }, 2000);
  }
  
}
