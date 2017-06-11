import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const Main = props => (
  <div>
    <AppBar
      title="Github Finder"
      showMenuIconButton={false}
    />
    <div>
      {props.children}
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.object,
};

export default Main;
