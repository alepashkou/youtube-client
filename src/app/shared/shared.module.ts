import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FilterAndSortPipe } from './pipes/filter-and-sort.pipe';
import { BottomBorderDirective } from './directives/bottom-border.directive';

@NgModule({
  declarations: [FilterAndSortPipe, BottomBorderDirective],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [MaterialModule, FilterAndSortPipe, BottomBorderDirective],
})
export class SharedModule { }
