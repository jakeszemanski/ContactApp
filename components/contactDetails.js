import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
const styles = require('../styles');
const favoriteStar = require('../assets/favoriteStarTrue/favoriteTrue.png')

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
            <Text style={styles.contactTitle}>PHONE:</Text>
            <Text style={styles.contactInfo}>{this.formatPhoneNumber(this.props.contact.phone[key])}</Text>
            <Text style={styles.contactPhone}>{key}</Text>
          </View>
        )
      })
    )
  }
  formatPhoneNumber(numberToFormat){
    console.log("to format", numberToFormat)
    let areaCode = numberToFormat.substring(0,3)
    let mainNumber = numberToFormat.substring(4, 12)
    console.log("after", mainNumber)
    return '(' + areaCode + ')' + ' ' + mainNumber
  }
  renderAddress() {
    let address = this.props.contact.address
    return (
      <View style={styles.card}>
        <Text style={styles.contactTitle}>ADDRESS:</Text>
        <Text style={styles.contactAddress}>{address.street}</Text>
        <Text style={styles.contactAddress}>{address.city}, {address.state} {address.zipCode}, {address.country} </Text>
      </View>

    )
  }
  renderBirthdate() {
    return (
      <View style={styles.card}>
        <Text style={styles.contactTitle}>BIRTHDATE:</Text>
        <Text style={styles.contactInfo}>{this.formatDate(this.props.contact.birthdate)}</Text>
      </View>)
  }
  formatDate(dateToFormat) {
    let objDate = new Date(dateToFormat)
    let day = objDate.getDay()
    let year = objDate.getFullYear()
    let locale = "en-us"
    let month = objDate.toLocaleString(locale, { month: "long" });
    return month + ` ${day}, ` + year 
  }

  renderEmail() {
    return (
      <View style={styles.card}>
        <Text style={styles.contactTitle}>EMAIL:</Text>
        <Text style={styles.contactInfo}>{this.props.contact.emailAddress}</Text>
      </View>)
  }
  

  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.props.onPressBack(null)}>
          <View style={styles.topBar}>
            <Text style={styles.left}>Contacts</Text>
            <Image style={styles.right} source={this.props.contact.isFavorite ? favoriteStar : null}/>
          </View>
        </TouchableOpacity>
        <View style={styles.card}>
          <Image source={{uri: this.props.contact.largeImageURL}} style={styles.largeImage} />
        </View>
        {this.renderName()}
        {this.renderPhoneNumbers()}
        {this.renderAddress()}
        {this.renderBirthdate()}
        {this.renderEmail()}
      </View>

    )
  }
}

module.exports = ContactDetails;