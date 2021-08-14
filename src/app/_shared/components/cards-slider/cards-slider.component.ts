import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-slider',
  templateUrl: './cards-slider.component.html',
  styleUrls: ['./cards-slider.component.scss']
})
export class CardsSliderComponent implements OnInit {

  @Input() data = [] as any[];

  constructor() { }

  ngOnInit(): void {
  }

}
