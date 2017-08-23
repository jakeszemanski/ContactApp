import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,

} from 'react-native'

export default class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: null
    }
  }
  componentShouldMount() {
    this.fetchContacts()
  }
  async fetchContacts() {
    let response = await fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
    console.log("res", await response.json())
  }

  render() {
    return (
      <View>
      <Text onPress={() => this.fetchContacts()}> Hello Work</Text>

      </View>
    )
  }
};

module.exports = ContactList;