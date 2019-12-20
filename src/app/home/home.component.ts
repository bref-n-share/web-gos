import { Component, OnInit } from '@angular/core';
import {CardData} from '../models/CardData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards: CardData[] = [
    {url: '', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', text: 'Faire des trucs'},
    {url: '', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', text: 'Faire des trucs'},
    {url: '', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', text: 'Faire des trucs'},
    {url: '', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', text: 'Faire des trucs'},
    {url: '', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', text: 'Faire des trucs'},
    {url: '', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', text: 'Faire des trucs'}
  ];

  ngOnInit() {
  }

}
