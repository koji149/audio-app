import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import AppContent from '../../components/AppContent';
import Swiper from 'react-native-swiper';

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} horizontal={false} showsPagination={false}>
        <View >
          <AppContent navigation={this.props.navigation}/>
        </View>
        <View>
          <AppContent navigation={this.props.navigation}/>
        </View>
        <View>
          <AppContent navigation={this.props.navigation}/>
        </View>
        <View>
          <AppContent navigation={this.props.navigation}/>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
})

AppRegistry.registerComponent('audio-app', () => SwiperComponent)