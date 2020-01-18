import { Component, OnInit } from '@angular/core';
import {Demand} from '../models/Demand';
import {DemandsService} from '../services/demands.service';
import demandsMock from '../../assets/mock/demands.json';

@Component({
  selector: 'app-my-demands',
  templateUrl: './my-demands.component.html',
  styleUrls: ['./my-demands.component.css']
})
export class MyDemandsComponent implements OnInit {
  demands: Demand[];
  constructor(
    private demandsService: DemandsService
  ) {}

  ngOnInit() {
    this.demandsService.demandsBS.subscribe((demands) => {
      this.demands = demands;
    });
    this.demandsService.getRequests().subscribe((demands: Array<Demand>) => {
      this.demandsService.demandsBS.next(demands);
      console.log('demands', demands);
    });
  }

}
