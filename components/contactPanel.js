import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity

} from 'react-native'

export default class ContactPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
    }
  }

  render() {
    console.log("this.props", this.props)
    return (
      <TouchableOpacity onPress={this.props.handlePress(this.props.contact)}>
        <Text>{this.props.contact.name}</Text>
        <Text>{this.props.contact.companyName}</Text>
      </TouchableOpacity>
    )
  }
};

module.exports = ContactPanel;