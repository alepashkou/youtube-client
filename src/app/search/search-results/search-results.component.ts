import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input() data?: SearchItem[];

  @Input() search?: string;
}
