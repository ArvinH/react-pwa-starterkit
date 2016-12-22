// import React from 'react';
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {withRouter} from 'react-router'

@withRouter
class Layout extends Component {
  constructor (props) {
    super(props);
    this.state        = {
      open:  false,
      title: props.title,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={this.state.title}
            iconElementLeft={
              <RaisedButton
                label="Toggle Drawer"
                onTouchTap={this.handleToggle}
              />
            }
          />
          <Drawer title={this.state.title} open={this.state.open}>
            <MenuItem
              onClick={
                () => {
                  this.setState({open: !this.state.open});
                  this.props.router.push('/');
                }
              }
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={
                () => {
                  this.setState({open: !this.state.open});
                  this.props.router.push('/about');
                }
              }
            >
              About
            </MenuItem>
          </Drawer>
          <div>{this.props.children}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.shape({
    children: React.PropTypes.object,
  }),
  title:    React.PropTypes.string,
};

export default Layout;
