import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { FlatList } from 'react-native';

import InfiniteScrollView from 'react-native-infinite-scroll-view';

const list = [
  { id: 1, email: 'Kumar@ss', name: 'user1', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'こんにちわおはようございますこんばんはさようなら', time: '3:43 pm', products: 1, follow: 11, follower: 111},
  { id: 2, email: 'Kumar@ss', name: 'user2', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo2', time: '3:43 pm', products: 2, follow: 22, follower: 222},
  { id: 3, email: 'Kumar@ss', name: 'user3', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo3', time: '3:43 pm', products: 3, follow: 33, follower: 333},
  { id: 4, email: 'Kumar@ss', name: 'user4', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo4', time: '3:43 pm', products: 4, follow: 44, follower: 444},
  { id: 5, email: 'Kumar@ss', name: 'user5', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo5', time: '3:43 pm', products: 5, follow: 55, follower: 555},
  { id: 6, email: 'Kumar@ss', name: 'user6', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo6', time: '3:43 pm', products: 6, follow: 66, follower: 666},
  { id: 7, email: 'Kumar@ss', name: 'user7', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo7', time: '3:43 pm', products: 7, follow: 77, follower: 777},
  { id: 8, email: 'Kumar@ss', name: 'user8', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo8', time: '3:43 pm', products: 8, follow: 88, follower: 888}
]

export default class ListAvatarExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <FlatList 
              data={list}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                  <ListItem
                  avatar
                  onPress={() => this.handleItemClick(item)}
                  >
                  <Left>
                    <Thumbnail source={{ uri: item.thumbnail }}/>
                  </Left>
                  <Body>
                    <Text style={{fontSize: 20, paddingTop: 10}}>{item.name}</Text>
                    <Text note style={{fontSize: 15}} ellipsizeMode="tail" numberOfLines={1}>{item.text}</Text>
                  </Body>
                  <Right>
                    <Text note>{item.time}</Text>
                  </Right>
                  </ListItem>
              )}
            />
    );
  }
  handleItemClick = (item) => {
    //itemをOtherUserScreenへ渡す
    this.props.navigation.navigate('OtherUserPage', 
      { name: item.name,
        email: item.email,
        thumbnail: item.thumbnail, 
        text: item.text ,
        productsNumber: item.products,
        followNumber: item.follow,
        followerNumber: item.follower},
    );
  }
}