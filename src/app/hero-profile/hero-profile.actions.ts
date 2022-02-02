import { createAction, props } from '@ngrx/store';
import { Heroe } from '../classes/heroe';

export const loadHeroe = createAction(
    '[Users] Load Heroes',
    props<{ heroe: Heroe}>()
);
