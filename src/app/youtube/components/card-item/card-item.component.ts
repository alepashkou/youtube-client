import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsItem } from '../../models/card-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() title: string;

  @Input() date: string;

  @Input() url: string;

  @Input() id?: string;

  @Input() statistics?: StatisticsItem;

  constructor(private router:Router) {}

  public clickToAbout():void {
    this.router.navigate(['youtube', this.id]);
  }
}
