import React, { Component } from "react";
import { Container, Content, Textarea, Form, Item, Input, Icon, Thumbnail } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import IconSaveButton from '../../elements/IconSaveButton.js'
export default class TextArea extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Content padder>
          <Item success>
            <Input placeholder='Textbox with Success Input'/>
            <Icon name='checkmark-circle' />
          </Item>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>
          <IconSaveButton iconName='md-save'/>
        </Content>
      </Container>
    );
  }
}