import { Routes } from '@angular/router';


import { IndexComponent } from './movie/index/index.component';
import { ViewComponent } from './movie/view/view.component';
import { CreateComponent } from './movie/create/create.component';
import { EditComponent } from './movie/edit/edit.component';

  

export const routes: Routes = [
      { path: 'movie', redirectTo: 'movie/index', pathMatch: 'full'},
      { path: 'movie/index', component: IndexComponent },
      { path: 'movie/:movieId/view', component: ViewComponent },
      { path: 'movie/create', component: CreateComponent },
      { path: 'movie/:movieId/edit', component: EditComponent } 
  ];
