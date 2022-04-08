import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FilterPipe } from './pipes/filter.pipe';
import { BottomBorderDirective } from './directives/bottom-border.directive';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [FilterPipe, BottomBorderDirective, SortingPipe],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [MaterialModule, FilterPipe, SortingPipe, BottomBorderDirective],
})
export class SharedModule { }
