/**
 *
 * Adventures
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
import makeSelectAdventures from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Components
import Contact from 'components/Contact'

export function Adventures() {
  useInjectReducer({ key: 'adventures', reducer });
  useInjectSaga({ key: 'adventures', saga });

  return (
    <div>
      <Helmet>
        <title>Adventures</title>
        <meta name="description" content="Description of Adventures" />
      </Helmet>
      <Contact />
    </div>
  );
}

Adventures.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adventures: makeSelectAdventures(),
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
)(Adventures);
