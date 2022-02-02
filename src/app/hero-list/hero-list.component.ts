import { Component, OnInit, OnDestroy } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit, OnDestroy {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  heroesList$: Observable<Array<Heroe>>
  public searchString : string;
  public arrayHeroes: Array<Heroe> = [];
  public heroeSubs: Subscription; 

  constructor(
    private heroesService: HeroesService,
    private store: Store<{ heroes: Array<Heroe> }>
  ) {

  }

  ngOnInit() {

    this.heroeSubs = this.store
        .select('heroes')
        .subscribe((heroes) => {
          this.arrayHeroes = heroes;
    });
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
  }

  ngOnDestroy(): void {
    this.heroeSubs.unsubscribe();
  }


}
