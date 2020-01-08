import { Component, OnInit } from '@angular/core';
// @ts-ignore
import demandsMock from '../../assets/mock/demands.json';
import {Demand} from '../models/Demand';
import {DemandsService} from '../services/demands.service';

@Component({
  selector: 'app-gos',
  templateUrl: './gos.component.html',
  styleUrls: ['./gos.component.css']
})
export class GosComponent implements OnInit {

  demands: Demand[];
  filterModel = {};

  constructor(
    private demandsService: DemandsService
  ) {
    this.demandsService.allDemands = demandsMock;
  }

  ngOnInit() {
    this.demandsService.demandsBS.subscribe((demands) => {
      this.demands = demands;
      if (Object.keys(this.filterModel).length === 0) {
        this.initFilters();
      }
    });
    this.demandsService.demandsBS.next(demandsMock);
  }

  initFilters() {
    this.demands.forEach(value => {
      value.categories.forEach(cat => {
        if (!this.filterModel[cat]) {
          this.filterModel[cat] = false;
        }
      });
    });
  }

}
