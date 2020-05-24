import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text } from 'react-native';
import AppContent from '../../components/AppContent';
import Swiper from 'react-native-swiper';

var contents = [
                  ['koji2', '', 'どうぞよろしくお願いいたします。'], 
                  ['kei2', '', '宜しくね'],
                  ['kanehira2', '', '旅行にいくべ'],
                  ['ddd2', '', 'せやかて工藤'],
                  ['hh2', '', 'せっせっせいや'],
                  ['ehs2', '', 'あｓｆｄｆ']]

export default class SwiperComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [1, 2, 3],
      key: 1
    };
  }

  pushNextData() {
    contents.push(
    ['koji3', '', 'どうぞよろしくお願いいたします。'], 
    ['kei3', '', '宜しくね'],
    ['kanehira3', '', '旅行にいくべ'],
    ['ddd3', '', 'せやかて工藤'],
    ['hh3', '', 'せっせっせいや'],
    ['ehs3', '', 'あｓｆｄｆ'])
  }

  pushPrevData() {
    contents.unshift(
    ['koji1', '', 'どうぞよろしくお願いいたします。'], 
    ['kei1', '', '宜しくね'],
    ['kanehira1', '', '旅行にいくべ'],
    ['ddd1', '', 'せやかて工藤'],
    ['hh1', '', 'せっせっせいや'],
    ['ehs1', '', 'あｓｆｄｆ'])
  }

  renderItem(item, idx) {
    if (contents[item]) {
      return (
        <View key={idx}>
          <AppContent
            userName={contents[item][0]} 
            thumbnail={contents[item][1]} 
            text={contents[item][2]} 
            navigation={this.props.navigation}
          />
        </View>)}
    else  {
      this.pushNextData();
      return (
        <View key={idx}>
          <AppContent 
            userName={contents[item][0]} 
            thumbnail={contents[item][1]} 
            text={contents[item][2]} 
            navigation={this.props.navigation}
          />
        </View>)
        }
      }

  onPageChanged(idx) {
    if (idx == 2) {
      const newPages = this.state.pages.map(i => (parseInt(i)+1))
      this.setState({pages: newPages, key: ((this.state.key+1)%2) })
    } else if (idx == 0) {
        const newPages = this.state.pages.map(i => (parseInt(i)-1))
        if (newPages.find(item => item === -1)) {
          this.setState({pages: [0, 1, 2], key: ((this.state.key+1)%2)})
          this.pushPrevData()
        } else {
          this.setState({pages: newPages, key: ((this.state.key+1)%2) })
        }
    }
  }

  render() {
    return (
      <Swiper 
        style={styles.wrapper} 
        horizontal={false} 
        showsPagination={true}
        index={1}
        key={this.state.key}
        loop={false}
        onIndexChanged={(index) => this.onPageChanged(index)}>
        {this.state.pages.map((item, idx) => this.renderItem(item, idx))}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
})

AppRegistry.registerComponent('audio-app', () => SwiperComponent)