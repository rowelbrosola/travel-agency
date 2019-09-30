/**
 *
 * International
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
import makeSelectInternational from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Components
import Contact from 'components/Contact'

export function International() {
  useInjectReducer({ key: 'international', reducer });
  useInjectSaga({ key: 'international', saga });

  return (
    <div>
      <Helmet>
        <title>International</title>
        <meta name="description" content="Description of International" />
      </Helmet>
      <Contact />
    </div>
  );
}

International.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  international: makeSelectInternational(),
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
)(International);
