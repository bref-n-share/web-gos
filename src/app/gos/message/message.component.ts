import {Component, Input, OnInit} from '@angular/core';
import {Demand} from '../../models/Demand';

@Component({
  selector: 'app-demand',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }
  @Input() demand: Demand;

  ngOnInit() {
  }

}
