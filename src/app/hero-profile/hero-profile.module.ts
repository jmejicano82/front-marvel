import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesService } from '../heroes.service';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroProfileRouting } from './hero-profile-routing.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    HeroProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroProfileRouting,
    UiModule
  ],
  providers: [HeroesService],
})
export class HeroProfileModule { }