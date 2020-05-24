import React, { Component } from "react";
import { Container, Content, Textarea, Form, Item, Input, Icon } from "native-base";

import IconSaveButton from '../../elements/IconSaveButton.js'
export default class TextArea extends Component {
  render() {
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