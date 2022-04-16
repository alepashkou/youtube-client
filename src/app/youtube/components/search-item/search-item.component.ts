import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() item: SearchItem;

  constructor(public route:Router) {}

  clickToAbout(id:string) {
    this.route.navigate(['youtube/', id]);
  }
}
