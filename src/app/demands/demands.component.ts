import { Component, OnInit } from '@angular/core';
// @ts-ignore
import demandsMock from '../../assets/mock/demands.json';
import {Demand} from '../models/Demand';
import {DemandsService} from '../services/demands.service';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

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
