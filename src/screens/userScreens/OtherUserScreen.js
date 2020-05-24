import React, { Component } from 'react';
import { Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const OtherUserScreen = ({ route, navigation }) => {

    const { name } = route.params;
    const { email } = route.params;
    const { thumbnail } = route.params;
    const { text } = route.params;
    const { productsNumber } = route.params;
    const { followNumber } = route.params;
    const { followerNumber } = route.params;

    return (
      <Grid >
        <Row style={{  height: 50 }}>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row style={{  height: 30}}>
          <Col size={1}></Col>
          <Col size={5} style={{justifyContent: 'bottom', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>{name}</Text>
          </Col>
          <Col size={1}></Col>
        </Row>
        <Row style={{height: 20}}>
        <Col></Col>
          <Col style={{alignItems: 'center'}}>
            <Text style={{fontSize: 10}}>{email}</Text>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{  height: 180}}>
          <Col></Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Thumbnail large source={{uri:thumbnail}} style={{height: 135, width: 135, borderRadius: 100}}/>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{  height: 100, alignItems: 'center', justifyContent: 'center'}}>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{productsNumber}</Text>
            <Text style={{fontSize: 15}}>投稿数</Text>
          </Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{followNumber}</Text>
            <Text style={{fontSize: 15}}>フォロー</Text>
          </Col>
          <Col　style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{followerNumber}</Text>
            <Text style={{fontSize: 15}}>フォロワー</Text>
          </Col>
        </Row>
        <Row style={{ height: 160  }} >
        <Col size={1}></Col>
          <Col size={5} >
            <Text style={{fontSize: 20}}>{text}</Text>
          </Col>
          <Col size={1}></Col>
        </Row>
      </Grid>
    );
  }

export default OtherUserScreen