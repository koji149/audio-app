import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { FlatList } from 'react-native';
import IconHeart2Button from '../../elements/IconHeart2Button';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

const list = [
  { id: 1, name: 'モノマネ1', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'こんにちわおはようございますこんばんはさようなら', time: '3:43 pm', like: 1},
  { id: 2, name: 'モノマネ2', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo2', time: '2020/02/02', like: 2},
  { id: 3, name: 'モノマネ3', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo3', time: '2020/03/03', like: 3},
  { id: 4, name: 'モノマネ4', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo4', time: '2020/04/04', like: 4},
  { id: 5, name: 'モノマネ5', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo5', time: '2020/05/05', like: 5},
  { id: 6, name: 'モノマネ6', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo6', time: '2020/06/06', like: 6},
  { id: 7, name: 'モノマネ7', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo7', time: '2020/07/07', like: 7},
  { id: 8, name: 'モノマネ8', thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png', text: 'memo8', time: '2020/08/08', like: 8}
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
                    <Text note style={{fontSize: 15}} ellipsizeMode="tail" numberOfLines={1}>最終更新日：{item.time}</Text>
                  </Body>
                  <Right>
                    <IconHeart2Button navigation={this.props.navigation} likeNumber={item.like} likeUsers={item.like}/>
                  </Right>
                  </ListItem>
              )}
            />
    );
  }
  handleItemClick = (item) => {
    //itemをEditProductScreenへ渡す
    this.props.navigation.navigate('EditProduct', {
        name: item.name,
        thumbnail: item.thumbnail, 
        updateTime: item.time ,
        likeNumber: item.like
      },
    );
  }
}