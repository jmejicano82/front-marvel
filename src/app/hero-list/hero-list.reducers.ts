import { createReducer, on } from '@ngrx/store';
import * as states from './hero-list.actions';
import { Heroe } from '../classes/heroe';

export interface heroeListState {
    heroes: Array<Heroe>;
    page: number;
    total: number;
}

const heroesInitialState: heroeListState = {
    heroes: [],
    page: null,
    total: null,
};

const _heroesReducer = createReducer(
    heroesInitialState,

    on(states.loadHeroes, (state, { heroes, page, total }) => ({
        ...state,
        loading: true,
        heroes,
        page,
        total
    })),

);

export function heroesReducer(state, action) {
    return _heroesReducer(state, action);
  }
