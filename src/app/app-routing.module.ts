import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';
import { AboutComponent } from './youtube/pages/about/about.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';

const routes: Routes = [{ path: '', component: SearchResultsComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
