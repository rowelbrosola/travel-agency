/**
 *
 * Booking
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBooking from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Components
import Contact from 'components/Contact'

export function Booking() {
  useInjectReducer({ key: 'booking', reducer });
  useInjectSaga({ key: 'booking', saga });

  return (
    <div>
      <Helmet>
        <title>Booking</title>
        <meta name="description" content="Description of Booking" />
      </Helmet>
      <Contact />
    </div>
  );
}

Booking.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  booking: makeSelectBooking(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Booking);
