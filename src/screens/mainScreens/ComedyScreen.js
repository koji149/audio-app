import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import AppContent from '../../components/AppContent';
import Swiper from 'react-native-swiper';

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}  horizontal={false}>
        <View >
          <AppContent/>
        </View>
        <View>
          <AppContent/>
        </View>
        <View>
          <AppContent/>
        </View>
        <View>
          <AppContent/>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
})

AppRegistry.registerComponent('news-app', () => SwiperComponent)