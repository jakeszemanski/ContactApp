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
  renderName() {
    return (
    <View style={styles.card}>
        <Text style={styles.contactName}>{this.props.contact.name}</Text>
        <Text style={styles.contactCompany}>{this.props.contact.companyName}</Text>
      </View>
    )
  }
  renderPhoneNumbers() {
    return (
      Object.keys(this.props.contact.phone).map((key, value) => {
        return (
          <View style={styles.card}>
            <Text style={styles.contactPageName}>PHONE:</Text>
            <Text style={styles.contactPageName}>{this.props.contact.phone[key]}</Text>
            <Text style={styles.contactName}>{key}</Text>
          </View>
        )
      })
    )
  }
  renderAddress() {
    return (
      Object.keys(this.props.contact))
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
        {this.renderName()}
        {this.renderPhoneNumbers()}
      </View>

    )
  }
}

module.exports = ContactDetails;