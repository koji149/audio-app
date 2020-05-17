import React, { Component } from 'react';
import { Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import IconHeart2Button from '../../elements/IconHeart2Button';

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
                <Text>ごりらのものまね</Text>
                <Text note numberOfLines={1}>最終更新日：2020/09/02</Text>
              </Body>
              <Right>
                <IconHeart2Button/>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail  source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>今年の抱負！</Text>
                <Text note numberOfLines={1}>最終更新日：2020/02/02</Text>
              </Body>
              <Right>
                <IconHeart2Button/>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail  source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>なめんな</Text>
                <Text note numberOfLines={1}>最終更新日：2020/03/02</Text>
              </Body>
              <Right>
                <IconHeart2Button/>
              </Right>
            </ListItem>
          </List>
        </Content>
    );
  }
}