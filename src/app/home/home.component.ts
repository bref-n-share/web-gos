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
    {url: '/demands', img: 'assets/img/demands.jpeg', text: 'Demandes'},
    {url: '/notify', img: 'assets/img/notification.jpeg', text: 'Notifier'},
    {url: '/gos', img: 'assets/img/gos-messaging.jpg', text: 'GOS Messaging'},
    {url: '/organization', img: 'assets/img/organization.jpeg', text: 'Gérer l\'organisation'},
    {url: '/account', img: 'assets/img/account.jpeg', text: 'Gérer mon compte'},
    {url: '/members', img: 'assets/img/members.jpeg', text: 'Gérer les membres'}
  ];

  ngOnInit() {
  }

}
