import { Component, OnInit } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  heroesList$: Observable<Array<Heroe>>
  public searchString : string;
  public arrayHeroes: Array<Heroe> = [];

  constructor(
    private heroesService: HeroesService,
    private store: Store<{ heroes: Array<Heroe> }>
  ) {



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

  ngOnInit() {

    this.heroesService.getHeroes(this.searchString);

    this.store
        .select('heroes')
        .subscribe((heroes) => {
          this.arrayHeroes = heroes;
    });
        
    

    /*
    this.heroes.push(new Heroe(
      '1',
      'Spiderman',
      'El hombre que araña',
      new Date(),
      {
        'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334',
      ''
    ));
    */
  }

}
