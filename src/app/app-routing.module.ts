import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { NotfoundComponent } from './core/pages/notfound/notfound.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./youtube/youtube.module')
    .then((m) => m.YoutubeModule),
  canActivate: [AuthGuard],
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module')
    .then((m) => m.AuthModule),
},
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module')
    .then((m) => m.AdminModule),
  canActivate: [AuthGuard],
},
{ path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
