import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filters-small',
  templateUrl: './filters-small.component.html',
  styleUrls: ['./filters-small.component.css']
})
export class FiltersSmallComponent implements OnInit {

  constructor() { }

  @Input() modelFilter;

  ngOnInit() {
  }

}
