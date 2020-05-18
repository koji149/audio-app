import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title } from 'native-base';
import MypageScreen from './MypageScreen';
import MyProductsScreen from './MyProductsScreen'
import MyFavoliteProductsScreen from './MyFavoliteProductsScreen';
import MyFollowScreen from './MyFollowScreen'
import MyFollowerScreen from './MyFollowerScreen';

export default class TabsScrollableExample extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <Container>
        <Header hasTabs style={{height: 40}}>
          <Body>
            <Title>Audioなんとか</Title>
          </Body>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="マイページ">
            <MypageScreen />
          </Tab>
          <Tab heading="あなたの声">
            <MyProductsScreen />
          </Tab>
          <Tab heading="お気に入り">
            <MyFavoliteProductsScreen />
          </Tab>
          <Tab heading="フォロー">
            <MyFollowScreen navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="フォロワー">
            <MyFollowerScreen navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}