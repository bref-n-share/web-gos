import {Component, Input, OnInit} from '@angular/core';
import {Demand} from '../../models/Demand';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor() { }

  @Input() demand: Demand;

  ngOnInit() {
  }

}
