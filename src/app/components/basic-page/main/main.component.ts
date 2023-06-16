import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  imageSrc:string = '../../../assets/cake1.jpeg';
  defaultValue:any = "Priya";

  passValueToComponent(e:any){
    console.log(e.target.value);
  }
}
