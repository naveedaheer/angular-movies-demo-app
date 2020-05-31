import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewComponent } from './movies/list-view/list-view.component';
import { DetailViewComponent } from './movies/detail-view/detail-view.component';

const routes: Routes = [
  { path: '', component: ListViewComponent },
  { path: 'movies-list', component: ListViewComponent },
  { path: 'movie-detail/:id', component: DetailViewComponent },
  { path: '**', component: ListViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
