import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeroListComponent } from './hero-list/hero-list.component';
//import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroesService } from './heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './hero-list/hero-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
    //HeroListComponent,
    //HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({heroes: heroesReducer})
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
