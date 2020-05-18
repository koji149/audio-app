import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
export default class RegistrationScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block info>
            <Text>Light</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}