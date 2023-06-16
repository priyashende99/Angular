import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent implements OnInit {
  productName:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
      this.productName = this.route.snapshot.params['id'];
  }
}
