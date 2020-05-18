import React, { Component } from 'react';
import { Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import IconEditButton from '../../elements/IconEditButton';

export default class AppContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
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
            <Text style={{fontSize: 30}}>Kumar Pratik</Text>
          </Col>
          <Col size={1}></Col>
        </Row>
        <Row style={{height: 20}}>
        <Col></Col>
          <Col style={{alignItems: 'center'}}>
            <Text style={{fontSize: 10}}>Kumar@ss</Text>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{  height: 180}}>
          <Col></Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Thumbnail large source={{uri: uri}} style={{height: 135, width: 135, borderRadius: 100}}/>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{  height: 100, alignItems: 'center', justifyContent: 'center'}}>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>5</Text>
            <Text style={{fontSize: 15}}>投稿数</Text>
          </Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>66</Text>
            <Text style={{fontSize: 15}}>フォロー</Text>
          </Col>
          <Col　style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>456</Text>
            <Text style={{fontSize: 15}}>フォロワー</Text>
          </Col>
        </Row>
        <Row style={{ height: 160  }} >
        <Col size={1}></Col>
          <Col size={5} >
            <Text style={{fontSize: 20}}>I'm Kumar Pratik. Crazy Guys!!</Text>
          </Col>
          <Col size={1}></Col>
        </Row>
      </Grid>
    );
  }
}