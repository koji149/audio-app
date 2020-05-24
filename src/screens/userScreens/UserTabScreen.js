import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title } from 'native-base';
import ProfileScreen from './ProfileScreen';
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
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="プロフィール">
            <ProfileScreen navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="あなたの声">
            <MyProductsScreen navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="お気に入り">
            <MyFavoliteProductsScreen navigation={this.props.navigation}/>
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