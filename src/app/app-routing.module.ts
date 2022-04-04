import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';

const routes: Routes = [{ path: '', component: SearchResultsComponent },
  { path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
