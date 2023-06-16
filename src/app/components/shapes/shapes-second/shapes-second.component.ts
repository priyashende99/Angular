import { Component } from '@angular/core';
import { ShapesService } from 'src/app/shapes.service';

@Component({
  selector: 'app-shapes-second',
  templateUrl: './shapes-second.component.html',
  styleUrls: ['./shapes-second.component.scss']
})
export class ShapesSecondComponent {
  shape:any = '';
  color:any = '';
  shapeClass:any = '';

  constructor(private shapesService:ShapesService){}

  drawShape(){
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
    // this.shapeClass = this.shape + "-" + this.color;
  }

}
