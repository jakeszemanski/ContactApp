import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
const styles = require('../styles');

export default class ContactDetails extends Component {
  constructor(props) {
    super(props)

  }
  renderPhoneNumbers() {
    Object.keys(this.props.contact.phone).forEach((key) => {
      return (
        <View style={styles.card}>
          <Text style={styles.contactName}>PHONE:</Text>
          <Text style={styles.contactName}>{key}</Text>
        </View>
      )
    })
  }

  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.props.onPressBack(null)}>
          <View style={styles.topBar}>
            <Text>Contacts</Text>
            <Text>{this.props.contact.isFavorite}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.card}>
          <Image source={{uri: this.props.contact.largeImageURL}} style={styles.largeImage} />
        </View>
        <View style={styles.card}>
          <Text style={styles.contactName}>{this.props.contact.name}</Text>
          <Text style={styles.contactCompany}>{this.props.contact.companyName}</Text>
        </View>
        {this.renderPhoneNumbers()}
      </View>

    )
  }
}

module.exports = ContactDetails;