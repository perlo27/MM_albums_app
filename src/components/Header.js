import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Header as NBHeader, Left, Body, Button, Icon } from 'native-base';

import { headerHeight } from '../config';
import { navigation } from './propTypes';

export const Header = ({ title, navigation }) => (
  <NBHeader style={styles.header}>
    <Left style={styles.left}>
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body style={styles.body}>
      <Text numberOfLines={2} style={styles.text}>
        {title}
      </Text>
    </Body>
  </NBHeader>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: headerHeight,
    paddingTop: 0,
  },
  left: {
    flex: 0,
  },
  body: {
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  text: { fontWeight: 'bold' },
});

Header.propTypes = {
  title: PropTypes.string,
  navigation,
};
Header.defaultProps = {};
