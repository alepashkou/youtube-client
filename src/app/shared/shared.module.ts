import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FilterAndSortPipe } from './pipes/filter-and-sort.pipe';

@NgModule({
  declarations: [FilterAndSortPipe],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [MaterialModule, FilterAndSortPipe],
})
export class SharedModule { }
