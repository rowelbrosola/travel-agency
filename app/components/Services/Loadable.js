/**
 *
 * Asynchronously loads the component for Services
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
