import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
export default class ButtonSizeExample extends Component {
  render() {
    return (
          <Button iconLeft transparent onPress={() =>
            this.props.navigation.navigate('LikedUserList', { 
              likeNumber: this.props.likeNumber,
              likeUsers: this.props.likeUsers} )
            }>
            <Icon name='md-heart' style={{fontSize: 20}} />
            <Text>{this.props.likeNumber}</Text>
          </Button>
    );
  }
}