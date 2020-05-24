import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { FlatList } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import IconListenButton from '../../elements/IconListenButton'

const list = [
  { id: 1, name: 'バカ1', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: '経済財政1', time: '3:43 pm', like: 1},
  { id: 2, name: 'バカ2', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: 'ものまね2', time: '2020/02/02', like: 2},
  { id: 3, name: 'バカ3', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: 'おはよう3', time: '2020/03/03', like: 3},
  { id: 4, name: 'バカ4', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: 'こんにちは4', time: '2020/04/04', like: 4},
  { id: 5, name: 'バカ5', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: '相変わらず5', time: '2020/05/05', like: 5},
  { id: 6, name: 'バカ6', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: '関数6', time: '2020/06/06', like: 6},
  { id: 7, name: 'バカ7', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: 'ギリシャ支援7', time: '2020/07/07', like: 7},
  { id: 8, name: 'バカ8', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', title: 'フィードバック8', time: '2020/08/08', like: 8}
]

export default class MyFavoliteProductsScreen extends Component {
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
                    <Text style={{fontSize: 20, paddingTop: 10}}　ellipsizeMode="tail" numberOfLines={1}>{item.title}</Text>
                    <Text note style={{fontSize: 15}} ellipsizeMode="tail" numberOfLines={1}>{item.name}</Text>
                  </Body>
                  <Right>
                    <IconListenButton/>
                  </Right>
                  </ListItem>
              )}
            />
    );
  }
  handleItemClick = (item) => {
    //itemをListenFavoliteProductsScreenへ渡す
    this.props.navigation.navigate('ListenProduct', 
      { name: item.name,
        title: item.title,
        thumbnail: item.thumbnail, 
        updateTime: item.time ,
        likeNumber: item.like},
    );
  }
}