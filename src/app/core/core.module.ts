import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [HeaderComponent, FilterComponent, NotfoundComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FilterComponent],
})
export class CoreModule { }
