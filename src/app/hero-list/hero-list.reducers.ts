import { createReducer, on } from '@ngrx/store';
import * as states from './hero-list.actions';
import { Heroe } from '../classes/heroe';

export interface heroeListState {
    heroes: Array<Heroe>;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const heroesInitialState: heroeListState = {
    heroes: [],
    loaded: false,
    loading: false,
    error: null
};

const _heroesReducer = createReducer(
    heroesInitialState,

    on(states.loadHeroes, (state, { heroes }) => ({
        ...state,
        loading: true,
        heroes
    })),

);

export function heroesReducer(state, action) {
    return _heroesReducer(state, action);
  }
