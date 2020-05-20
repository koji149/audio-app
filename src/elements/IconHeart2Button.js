import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
export default class ButtonSizeExample extends Component {
  render() {
    return (
          <Button iconLeft transparent onPress={() =>
            this.props.navigation.navigate('OtherUserList')
            }>
            <Icon name='md-heart' style={{fontSize: 20}} />
            <Text>20</Text>
          </Button>
    );
  }
}