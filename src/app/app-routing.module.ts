import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ModalPollComponent } from './ui/modal-poll/modal-poll.component';

const routes: Routes = [
  {
    path: 'listado-heroes',
    loadChildren: () => import('./hero-list/hero-list.module').then(m => m.HeroListModule)
  },
  {
    path: 'heroe/:id',
    loadChildren: () => import('./hero-profile/hero-profile.module').then(m => m.HeroProfileModule)
  },

  { path: '**', redirectTo: '/listado-heroes'},
  /*
  
  
  
    { path: 'listado-heroes', component: HeroListComponent},
    { path: 'heroe/:id', component: HeroProfileComponent},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
