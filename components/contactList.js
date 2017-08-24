import React, { Component } from 'react';
import ContactPanel from './contactPanel.js';
import ContactDetails from './contactDetails.js';
import {
  View,
  Text,
  StyleSheet,
  ScrollView

} from 'react-native'

const styles = require('../styles');

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
    this.setState({contacts: await response.json(), selectedContact: this.state.selectedContact})
    console.log("this.state", this.state)
  }
  handleContactPress(selectedContact){
    this.setState({selectedContact: selectedContact})
  }
  renderContacts() {
    if (this.state.selectedContact) {
      return (
        <ContactDetails contact={this.state.selectedContact} onPressBack={() => this.handleContactPress.bind(this, null)}/>
      )
    } else if (this.state.selectedContact === null && this.state.contacts) {
      return (
        this.state.contacts.map((contact, index) => {
          return (
            <ContactPanel contact={contact} key={index} handlePress={() => this.handleContactPress.bind(this, contact)}/> 
          )
        })
      ) 
    } else {
      return <Text>Loading</Text>
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
      { this.renderContacts()}
       </View>
      </ScrollView>
    )
  }
};

module.exports = ContactList;