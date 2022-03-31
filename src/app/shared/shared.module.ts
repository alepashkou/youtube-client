import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FilterPipe } from './pipes/filter.pipe';
import { BottomBorderDirective } from './directives/bottom-border.directive';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [FilterPipe, BottomBorderDirective, SortPipe],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [MaterialModule, FilterPipe, SortPipe, BottomBorderDirective],
})
export class SharedModule { }
