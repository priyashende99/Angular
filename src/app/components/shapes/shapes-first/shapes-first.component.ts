import { Component } from '@angular/core';
import { ShapesService } from 'src/app/shapes.service';

@Component({
  selector: 'app-shapes-first',
  templateUrl: './shapes-first.component.html',
  styleUrls: ['./shapes-first.component.scss']
})
export class ShapesFirstComponent {

  shape:any = '';
  color:any = '';
  shapeClass:any = '';

  constructor(private shapesService:ShapesService){}

  drawShape() {
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
    // this.shapeClass = this.shape + '-' + this.color;
  }


}
