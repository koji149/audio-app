import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title, Toast } from 'native-base';

export default class NotificationScreen extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Content>
          <List >
            <ListItem 
              avatar 
              onPress={() =>
              this.props.navigation.navigate('OtherUserPage')
              }
            >
              <Left>
                <Thumbnail source={{ uri: uri }} />
              </Left>
              <Body >
                <Text>Kumar Pratik</Text>
                <Text note>あなたをフォローしました{"\n"}説明文</Text>
              </Body>
              <Right　style={{justifyContent: 'center'}}>
                <Button transparent small onPress={()=> Toast.show({
                  text: 'フォローしました',
                  buttonText: 'Okay'
                  })}
                > 
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
                <Button transparent small transparent small onPress={()=> Toast.show({
                  text: 'フォローしました',
                  buttonText: 'Okay'
                  })}
                > 
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