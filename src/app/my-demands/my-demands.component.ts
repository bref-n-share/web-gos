import { Component, OnInit } from '@angular/core';
import {Demand} from '../models/Demand';
import {DemandsService} from '../services/demands.service';

@Component({
  selector: 'app-my-demands',
  templateUrl: './my-demands.component.html',
  styleUrls: ['./my-demands.component.css']
})
export class MyDemandsComponent implements OnInit {
  demands: Demand[];
  loading = true;
  constructor(
    private demandsService: DemandsService
  ) {}

  ngOnInit() {
    this.demandsService.demandsBS.subscribe((demands) => {
      this.demands = demands;
    });
    this.demandsService.getRequests().subscribe((demands: Array<Demand>) => {
      this.demandsService.demandsBS.next(demands);
      this.loading = false;
    });
  }

  onSearch(event: string) {
    const demands = this.demandsService.demandsBS.getValue();
    if (event.length > 0) {
      this.demands = this.demands.filter(d => d.title.includes(event));
    } else {
      this.demands = demands;
    }
  }

}
