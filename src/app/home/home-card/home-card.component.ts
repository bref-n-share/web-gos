import {Component, Input, OnInit} from '@angular/core';
import {CardData} from '../../models/CardData';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  constructor() { }

  @Input() cardData: CardData;

  ngOnInit() {
  }

}
