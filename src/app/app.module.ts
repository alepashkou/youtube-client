import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SharedModule } from './shared/shared.module';
import { BottomBorderDirective } from './search/search-item/bottom-border/bottom-border.directive';
import { StatisticsComponent } from './search/search-item/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchItemComponent,
    HeaderComponent,
    FilterComponent,
    BottomBorderDirective,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
