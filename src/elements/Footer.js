import React, { Component } from 'react';
import { Button, Icon, Footer, FooterTab} from 'native-base';
export default class TopScreen extends Component {

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="search" />
            </Button>
            <Button active>
              <Icon active name="mic" />
            </Button>
            <Button>
              <Icon name="ios-notifications" />
            </Button>
            <Button>
              <Icon name="md-person" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}