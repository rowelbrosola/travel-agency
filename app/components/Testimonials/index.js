/**
 *
 * Testimonials
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Testimonials() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Testimonials.propTypes = {};

export default memo(Testimonials);
