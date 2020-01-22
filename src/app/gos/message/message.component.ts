import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Demand} from '../../models/Demand';
import {BeingDonatedService} from '../../services/being-donated.service';
import {PostService} from '../../services/post.service';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(
    private beingDonatedService: BeingDonatedService,
    private postService: PostService
  ) {
  }

  loading = false;
  @Input() demand: Demand;
  @Output() give = new EventEmitter();

  commentText: string;

  ngOnInit() {
    this.commentText = '';
    this.beingDonatedService.beingDonatedBS.subscribe(loading => {
      if (loading && loading['requestId'] === this.demand.id) {
        this.loading = loading['loading'];
      }
    });
  }

  onClickGive() {
    this.give.emit(this.demand);
  }

  comment() {
    this.loading = true;
    this.postService.setComment(this.demand.id, this.commentText).subscribe((ret: Comment)  => {
      this.commentText = '';
      this.demand.comments.push(ret);
      this.loading = false;
    }, error => {
      this.loading = true;
    });
  }
}
