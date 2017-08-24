import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity

} from 'react-native'

export default class ContactDetails extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.props.onPressBack(null)}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>Selected{this.props.contact.name}</Text>
      </View>

    )
  }
}

module.exports = ContactDetails;