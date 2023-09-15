import { Component, Input } from '@angular/core';
import { IBriefJobOffer } from '../../models/interfaces';

@Component({
  selector: 'shared-brief-job-offer',
  templateUrl: './brief-job-offer.component.html',
  styleUrls: ['./brief-job-offer.component.css'],
})
export class BriefJobOfferComponent {
  @Input() offer!: IBriefJobOffer;
}
