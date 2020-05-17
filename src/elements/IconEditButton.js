import React, { Component } from 'react';
import { Button, Icon, View } from 'native-base';
export default class ButtonSizeExample extends Component {
  render() {
    return (
        <View style={{ padding: 20  }}>
          <Button info style={{justifyContent: 'center', }} rounded  >
          <Icon name='md-create' style={{fontSize: 25, color: '#fff'}}/>
          </Button>
        </View>
    );
  }
}