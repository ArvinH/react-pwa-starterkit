import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => (
  <div>
    <TextField
      hintText="Please Key in your Github User Id."
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
  onSubmitUserId: React.PropTypes.Object,
  onChangeUserId: React.PropTypes.Object,
  userId: React.PropTypes.string,
};

export default HomePage;
