import { Component, OnInit } from '@angular/core';
// @ts-ignore
import demandsMock from '../../assets/mock/demands.json';
import {Demand} from '../models/Demand';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

  demands: Demand[];

  constructor() {
    console.log(demandsMock);
    this.demands = demandsMock;
  }

  ngOnInit() {
  }

}
