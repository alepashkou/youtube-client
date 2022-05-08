import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectData } from 'src/app/redux/selectors/selectors.data';
import { AllYoutubeData } from 'src/app/redux/state.models';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private allData$ = this.store.select(selectData);

  public allData$$: AllYoutubeData;

  subscriptions: Subscription = new Subscription();

  constructor(private store: Store, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.subscriptions.add(this.allData$.subscribe((data) => this.allData$$ = data));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
