import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
export default class ButtonSizeExample extends Component {
  render() {
    return (
          <Button iconLeft transparent >
            <Icon name='md-musical-note' style={{fontSize: 20}} />
            <Text>{this.props.likeNumber}</Text>
          </Button>
    );
  }
}