import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header hasTabs style={{height: 60 }}>
          <Body style={{justifyContent: 'center'}}>
            <Title>Audioなんとか</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>あなたをフォローしました{"\n"}説明文</Text>
              </Body>
              <Right　style={{justifyContent: 'center'}}>
                <Button transparent small > 
                  <Text>Follow</Text>
                </Button>
                <Text note style={{fontSize: 10}}>10 min</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>あなたの投稿にイイねしました{"\n"}説明文</Text>
              </Body>
              <Right　style={{justifyContent: 'center'}}>
                <Button transparent small > 
                  <Text>Follow</Text>
                </Button>
                <Text note style={{fontSize: 10}}>10 min</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}