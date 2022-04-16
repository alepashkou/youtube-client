import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInGuard } from './core/guards/loggedIn.guard';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'youtube',
},
{
  path: 'youtube',
  canLoad: [AuthGuard],
  loadChildren: () => import('./youtube/youtube.module')
    .then((m) => m.YoutubeModule),
},
{
  path: 'auth',
  canLoad: [LoggedInGuard],
  loadChildren: () => import('./auth/auth.module')
    .then((m) => m.AuthModule),
},
{ path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
