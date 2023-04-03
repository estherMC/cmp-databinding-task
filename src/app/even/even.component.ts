import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input('chrono') element: number;
  @ContentChild('evenTimer', {static:true}) paragraph: ElementRef;

  constructor() {
   }

  ngOnInit(): void {
  }

}
