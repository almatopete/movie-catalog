import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { IndexComponent } from './movie/index/index.component';
import { ViewComponent } from './movie/view/view.component';
import { CreateComponent } from './movie/create/create.component';
import { EditComponent } from './movie/edit/edit.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

  

export const routes: Routes = [
      {path: 'home', component: HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'movie', redirectTo: 'movie/index', pathMatch: 'full'},
      { path: 'movie/index', component: IndexComponent },
      { path: 'movie/:movieId/view', component: ViewComponent },
      { path: 'movie/create', component: CreateComponent },
      { path: 'movie/:movieId/edit', component: EditComponent }
  ];
