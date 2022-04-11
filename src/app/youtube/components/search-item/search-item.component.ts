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

  constructor(private router:Router) {}

  public clickToAbout(id:string) {
    this.router.navigate(['about/', id]);
  }
}
