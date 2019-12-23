import {Component, Input, OnInit} from '@angular/core';
import {DemandsService} from '../../services/demands.service';

@Component({
  selector: 'app-filter-big',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(
    private demandsService: DemandsService
  ) { }

  @Input() modelsFilter;

  ngOnInit() {
  }

  getKeys() {
    return Object.keys(this.modelsFilter);
  }

  modelChanged() {
    const allDemands = this.demandsService.allDemands;
    const demands = [];
    allDemands.forEach(d => {
      d.categories.forEach(c => {
        if (this.modelsFilter[c]) {
          demands.push(d);
        }
      });
    });
    if (demands.length === 0) {
      this.demandsService.demandsBS.next(allDemands);
    } else {
      this.demandsService.demandsBS.next(demands);
    }
  }

}
