import React, { Component } from 'react';
import { Button, Icon, View } from 'native-base';
export default class ButtonSizeExample extends Component {
  render() {
    return (
        <View style={{ padding: 20}}>
          <Button  large style={{justifyContent: 'center', }} rounded transparent >
          <Icon name='md-share' style={{fontSize: 50}}/>
          </Button>
        </View>
    );
  }
}