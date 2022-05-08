import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
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
