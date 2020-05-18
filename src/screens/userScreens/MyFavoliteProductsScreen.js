import React, { Component } from 'react';
import { Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class ListThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail  source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>おはよう</Text>
                <Text note numberOfLines={1}>たけし</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Listen</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail  source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>いい夜を</Text>
                <Text note numberOfLines={1}>ハイブリッドお兄さん</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Listen</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail  source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>千鳥のぶのものまね</Text>
                <Text note numberOfLines={1}>こばやす</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Listen</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
    );
  }
}