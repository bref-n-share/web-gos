import {Component, Input, OnInit} from '@angular/core';
import {Demand} from '../../models/Demand';
import {Router} from '@angular/router';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input() demand: Demand;

  ngOnInit() {
  }

  editDemand(demand) {
    const url = '/demand-form/' + demand.id;
    this.router.navigate([url]);
  }

}
