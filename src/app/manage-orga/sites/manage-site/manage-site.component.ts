import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Site} from '../../../models/Site';

@Component({
  selector: 'app-manage-site',
  templateUrl: './manage-site.component.html',
  styleUrls: ['./manage-site.component.css']
})
export class ManageSiteComponent implements OnInit {

  @Input() site: Site;
  @Output() siteSelected = new EventEmitter();
  addressModel = '';

  constructor() { }

  ngOnInit() {
    console.log('site', this.site);
  }

  itemSelected(site) {
    this.siteSelected.emit(site);
  }

}
