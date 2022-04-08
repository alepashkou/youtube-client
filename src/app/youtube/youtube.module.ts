import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { SharedModule } from '../shared/shared.module';
import { BottomBorderDirective } from './directives/bottom-border.directive';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [{ path: '', component: SearchResultsComponent },
  { path: 'about/:id', component: AboutComponent, canActivate: [AuthGuard] }];
@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
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
  exports: [SearchResultsComponent],
  bootstrap: [],
})
export class YoutubeModule { }
