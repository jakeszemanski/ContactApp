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
  }
  handleContactPress(selectedContact){
    this.setState({selectedContact: selectedContact})
  }
  handleFavoritePress(favoritedContact) {
    let updatedContact = favoritedContact
    updatedContact.isFavorite = !favoritedContact.isFavorite
    this.setState({selectedContact: updatedContact})
  }

  favoriteFilter(contact) {
    if (contact.isFavorite) {
      return contact
    }
  }
  otherContactFilter(contact) {
    if (contact.isFavorite === false) {
      return contact
    }
  }
  renderFavorites() {
    let favorites = this.state.contacts.filter(this.favoriteFilter)
    return (
      favorites.map((contact, index) => {
        return (
          <ContactPanel contact={contact} key={index} handlePress={() => this.handleContactPress.bind(this, contact)}/>
        )
      })
    )
  }
  renderOtherContacts() {
    let otherContacts = this.state.contacts.filter(this.otherContactFilter)
    return (
      otherContacts.map((contact, index) => {
        return (
          <ContactPanel contact={contact} key={index} handlePress={() => this.handleContactPress.bind(this, contact)}/>
        )
      })
    )
  }
  renderList() {
    if (this.state.selectedContact) {
      return (
        <ContactDetails contact={this.state.selectedContact} onPressBack={() => this.handleContactPress.bind(this, null)}
         handleFavorite={() => this.handleFavoritePress.bind(this, this.state.selectedContact)}/>
      )
    } else if (this.state.selectedContact === null && this.state.contacts) {
      return (
        <View>
          <Text style={styles.listTitle}>Favorites</Text>
          {this.renderFavorites()}
          <Text style={styles.listTitle}>Other Contacts</Text>
          {this.renderOtherContacts()}
        </View>

      )
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        {this.renderList()}
        </View>
      </ScrollView>
    )
  }
};

module.exports = ContactList;