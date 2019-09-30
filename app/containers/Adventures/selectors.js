import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adventures state domain
 */

const selectAdventuresDomain = state => state.adventures || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Adventures
 */

const makeSelectAdventures = () =>
  createSelector(
    selectAdventuresDomain,
    substate => substate,
  );

export default makeSelectAdventures;
export { selectAdventuresDomain };
