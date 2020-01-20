import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  search = '';

  @Output() searchEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  onInput(search) {
    this.searchEvent.emit(search);
  }

}
