import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

export default () => (
  <Card style={{ textAlign: 'center' }}>
    <CardTitle style={{ margin: 'auto' }}>PWA</CardTitle>
    <CardText>
      About this Application
    </CardText>
    <CardActions>
      <RaisedButton onClick={() => hashHistory.push('/')} >OK</RaisedButton>
    </CardActions>
  </Card>
);
