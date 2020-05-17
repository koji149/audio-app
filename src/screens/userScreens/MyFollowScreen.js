import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class ListAvatarExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
    );
  }
}