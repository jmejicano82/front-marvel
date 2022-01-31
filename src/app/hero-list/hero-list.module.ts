import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesService } from '../heroes.service';
import { HeroListComponent } from './hero-list.component';
import { HeroListRouting } from './hero-list-routing.module';

@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroListRouting
  ],
  providers: [HeroesService],
})
export class HeroListModule { }
