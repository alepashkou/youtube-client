import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { SharedModule } from '../shared/shared.module';
import { BottomBorderDirective } from './directives/bottom-border.directive';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: ':id', component: AboutComponent },
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    CardItemComponent,
    StatisticsComponent,
    FilterPipe,
    SortingPipe,
    BottomBorderDirective,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [],
  bootstrap: [],
})
export class YoutubeModule { }
