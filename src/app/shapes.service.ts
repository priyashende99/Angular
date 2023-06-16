import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {

  constructor() { }

  getClassName(shape:any, color:any){
    return shape + "-" + color;
  }
}
