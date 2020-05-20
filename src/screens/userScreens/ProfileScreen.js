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
          <Col style={{justifyContent: 'top'}}>
            <IconEditButton navigation={this.props.navigation}/>
          </Col>
        </Row>
        <Row style={{  height: 30}}>
          <Col></Col>
          <Col style={{justifyContent: 'bottom', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>たける</Text>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{height: 20}}>
        <Col></Col>
          <Col style={{alignItems: 'center'}}>
            <Text style={{fontSize: 10}}>takeru</Text>
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
            <Text style={{fontSize: 20}}>100</Text>
            <Text style={{fontSize: 15}}>投稿数</Text>
          </Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>100</Text>
            <Text style={{fontSize: 15}}>フォロー</Text>
          </Col>
          <Col　style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>1</Text>
            <Text style={{fontSize: 15}}>フォロワー</Text>
          </Col>
        </Row>
        <Row style={{ height: 160  }} >
        <Col size={1}></Col>
          <Col size={5} >
            <Text style={{fontSize: 20}}>僕はたける！！35歳だよ！！いろんなvoiceを上げていくから、みんなフォローよろしく！</Text>
          </Col>
          <Col size={1}></Col>
        </Row>
      </Grid>
    );
  }
}