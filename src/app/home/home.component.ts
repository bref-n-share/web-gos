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
    {url: '/demands', img: 'assets/img/demands.jpeg', text: 'Gerer mes demandes'},
    {url: '/gos', img: 'assets/img/gos-messaging.jpg', text: 'Liste des posts'},
    {url: '/notify', img: 'assets/img/notification.jpeg', text: 'Notifier'},
    {url: '/organization', img: 'assets/img/organization.jpeg', text: 'Gérer l\'organisation'},
    {url: '/site', img: 'assets/img/site.jpeg', text: 'Gérer le site'},
    {url: '/members', img: 'assets/img/members.jpeg', text: 'Gérer les membres'}
  ];

  ngOnInit() {
  }

}
