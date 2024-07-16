import { ActionReducer, Action } from '@ngrx/store';
import merge from 'lodash-es/merge';
import pick from 'lodash-es/pick';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey) || '{}');
}

// the keys from state which we'd like to save.
const stateKeys = ['auth.tokens']; // , 'auth.user'
// the key for the local storage.
export const localStorageKey = 'app_storage';

export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>): any {
  console.log('storageMetaReducer Work');
  let onInit = true; // after load/refresh…
  return function (state: S, action: A): S {
    // reduce the nextState.
    const nextState = reducer(state, action);
    // init the application state.
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }
    // save the next state to the application storage.
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}
