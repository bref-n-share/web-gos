import {Component, OnInit} from '@angular/core';
// @ts-ignore
import demandsMock from '../../assets/mock/demands.json';
import {Demand} from '../models/Demand';
import {DemandsService} from '../services/demands.service';
import {PostService} from '../services/post.service';
import {BeingDonatedService} from '../services/being-donated.service';

@Component({
  selector: 'app-gos',
  templateUrl: './gos.component.html',
  styleUrls: ['./gos.component.css']
})
export class GosComponent implements OnInit {

  demands: Demand[];
  filterModel = {};

  constructor(
    private demandsService: DemandsService,
    private postService: PostService,
    private beingDonatedService: BeingDonatedService
  ) {
  }

  ngOnInit() {
    this.demandsService.demandsBS.subscribe((demands) => {
      this.demands = demands;
    });
    this.postService.getPosts().subscribe((posts: Demand[]) => {
      this.demandsService.demandsBS.next(posts);
    });
  }

  onGive(demand: Demand) {
    this.beingDonatedService.beingDonatedBS.next({requestId: demand.id, loading: true});
    const tmpDmd = {
      id: demand.id,
      currentQuantity: demand.currentQuantity + 1
    };
    console.log('calling with', tmpDmd);
    this.demandsService.donate(demand.id).subscribe(result => {
      console.log('res', result);
      demand.currentQuantity = demand.currentQuantity + 1;
      this.beingDonatedService.beingDonatedBS.next({requestId: demand.id, loading: false});
    });
  }
}
