import { Component, Input } from '@angular/core';
import { StatisticsItem } from '../../models/card-item.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  @Input() stat?: StatisticsItem;
}
