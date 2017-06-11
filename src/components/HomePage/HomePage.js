import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

if (process.env.BROWSER) {
  require('./HomePage.css'); // eslint-disable-line global-require
}
const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => (
  <div className="Ta(c) M(20px)">
    <TextField
      hintText="Please Key in your Github User Id."
      className="M(20px)"
      onChange={onChangeUserId}
    />
    <Link
      to={{
        pathname: '/result',
        query: { userId },
      }}
    >
      <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>
);

HomePage.propTypes = {
  onSubmitUserId: PropTypes.func,
  onChangeUserId: PropTypes.func,
  userId: PropTypes.string,
};

export default HomePage;
