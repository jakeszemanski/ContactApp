import React, { Component } from 'react';
import ContactPanel from './contactPanel.js'
import {
  View,
  Text,
  StyleSheet,

} from 'react-native'

export default class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      selectedContact: null
    }

  }
  componentWillMount() {
    this.fetchContacts();
  }
  async fetchContacts() {
    let response = await fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
    this.setState({contacts: await response.json()})
    console.log("this.state", this.state)
  }
  handleContactPress(selectedContact){
    // this.setState({selectedContact})
    console.log("pressed!!!!", selectedContact)
  }

  render() {
    return (
      <View>
      { this.state.contacts.map((contact, index) => { 
        return (
          <ContactPanel contact={contact} key={index} handlePress={() => this.handleContactPress.bind(this, contact)}/> 
          )
      })}
      </View>
    )
  }
};

module.exports = ContactList;