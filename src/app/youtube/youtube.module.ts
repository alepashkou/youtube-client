import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { BottomBorderDirective } from './directives/bottom-border.directive';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    StatisticsComponent,
    FilterPipe,
    SortPipe,
    BottomBorderDirective,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [SearchResultsComponent],
})
export class YoutubeModule { }
