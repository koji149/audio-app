import React, { Component } from 'react';
import { Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import IconHeartButton from '../elements/IconHeartButton';
import IconShareButton from '../elements/IconShareButton'

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
        </Row>
        <Row style={{  height: 50}}>
          <Col></Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 40}}>たける</Text>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{  height: 250}}>
          <Col></Col>
          <Col style={{justifyContent: 'center', alignItems: 'center'}}>
            <Thumbnail large source={{uri: uri}} style={{height: 200, width: 200, borderRadius: 100}}/>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{  height: 40, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>おはよう。いいてんきだね</Text>
        </Row>
        <Row style={{ height: 120}}>
          <Col>
            <IconShareButton/>
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