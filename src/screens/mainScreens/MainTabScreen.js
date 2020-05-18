import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title } from 'native-base';
import ASMRScreen from './ASMRScreen';
import PopularScreen from './PopularScreen'
import NewScreen from './NewScreen';
import ComedyScreen from './ComedyScreen'
import ImitateScreen from './ImitateScreen';

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{height: 40}}>
          <Body>
            <Title>Audioなんとか</Title>
          </Body>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="新しい">
            <NewScreen navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="人気">
            <PopularScreen />
          </Tab>
          <Tab heading="コメディ">
            <ComedyScreen />
          </Tab>
          <Tab heading="モノマネ">
            <ImitateScreen />
          </Tab>
          <Tab heading="ASMR">
            <ASMRScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}