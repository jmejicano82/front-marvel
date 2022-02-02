import { createReducer, on } from '@ngrx/store';
import * as states from './hero-profile.actions';
import { Heroe } from '../classes/heroe';

export interface heroeListState {
    heroe: Heroe;
}

const heroesInitialState: heroeListState = {
    heroe: null,
};

const _heroeReducer = createReducer(
    heroesInitialState,

    on(states.loadHeroe, (state, { heroe }) => ({
        ...state,
        heroe
    })),

);

export function heroeReducer(state, action) {
    return _heroeReducer(state, action);
  }
