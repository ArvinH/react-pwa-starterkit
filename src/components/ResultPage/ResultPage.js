import React from 'react';
import PropTypes from 'prop-types';
import GithubBox from '../../components/GithubBox';

const ResultPage = props => (
  <div>
    <GithubBox data={props.data} userId={props.location.query.userId} />
  </div>
);

ResultPage.propTypes = {
  data: PropTypes.string,
  location: PropTypes.object,
};

export default ResultPage;
