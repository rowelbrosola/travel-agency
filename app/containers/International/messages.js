/*
 * International Messages
 *
 * This contains all the text for the International container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.International';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the International container!',
  },
});
