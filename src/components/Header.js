import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { Header as NBHeader, Left, Body, Button, Icon } from 'native-base';

import { headerHeight } from '../config';

export const Header = ({title, navigation}) => (
  <NBHeader style={{
    backgroundColor: 'white',
    height: headerHeight,
    paddingTop: 0
  }}>
    <Left style={{
      flex: 0
    }}>
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body style={{
      alignItems: 'flex-start',
      marginLeft: 5
    }}>
    <Text numberOfLines={2} style={{fontWeight: 'bold'}}>{title}</Text>
    </Body>
  </NBHeader>
);

const styles = StyleSheet.create({

});

Header.propTypes = {};
Header.defaultProps = {};

