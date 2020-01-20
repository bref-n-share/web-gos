import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Demand} from '../../models/Demand';
import {BeingDonatedService} from '../../services/being-donated.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(
    private beingDonatedService: BeingDonatedService
  ) {
  }

  loading = false;
  @Input() demand: Demand;
  @Output() give = new EventEmitter();

  ngOnInit() {
    this.beingDonatedService.beingDonatedBS.subscribe(loading => {
      if (loading && loading['requestId'] === this.demand.id) {
        this.loading = loading['loading'];
      }
    });
  }

  onClickGive() {
    this.give.emit(this.demand);
  }

}
