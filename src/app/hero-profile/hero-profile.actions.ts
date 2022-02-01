import { createAction, props } from '@ngrx/store';
import { Heroe } from '../classes/heroe';

export const loadHeroes = createAction(
    '[Users] Load Heroes',
    props<{ heroes: Array<Heroe>, page: number, total: number }>()
);
