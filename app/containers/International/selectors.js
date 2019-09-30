import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the international state domain
 */

const selectInternationalDomain = state => state.international || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by International
 */

const makeSelectInternational = () =>
  createSelector(
    selectInternationalDomain,
    substate => substate,
  );

export default makeSelectInternational;
export { selectInternationalDomain };
