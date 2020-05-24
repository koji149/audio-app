import React, { Component } from 'react';
import { Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import IconHeartButton from '../elements/IconHeartButton.js'

export default class AppContent extends Component {

  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Grid >
        <Row style={{  height: 50 }}>
        </Row>
        <Row style={{  height: 50}}>
          <Col size={1}></Col>
          <Col size={5} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 40}} onPress={() =>
              this.props.navigation.navigate('OtherUserPage')
            }>{this.props.userName}</Text>
          </Col>
          <Col size={1}></Col>
        </Row>
        <Row style={{  height: 250}}>
          <Col></Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Thumbnail large source={{uri: uri}} style={{height: 200, width: 200, borderRadius: 100}} />
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ height: 40, alignItems: 'center', justifyContent: 'center'}}>
          <Col size={1}></Col>
          <Col size={8} >
            <Text style={{fontSize: 30}}>{this.props.text}</Text>
          </Col>
          <Col size={1}></Col>
        </Row>
        <Row style={{ height: 120}}>
          <Col>
          </Col>
          <Col></Col>
          <Col>
            <IconHeartButton/>
          </Col>
        </Row>
      </Grid>
    );
  }
}