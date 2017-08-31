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
const emptyFavorite = require('../assets/favoriteStarFalse/favoriteFalse.png')
const defaultProfilePic = require('../assets/userLarge/userLarge.png')

export default class ContactDetails extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.contact.isFavorite !== nextProps.contact.isFavorited) {
      return true
    }
    return false
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
      Object.keys(this.props.contact.phone).map((key) => {
        return (
          <View style={styles.card} key={key}>
            <Text style={styles.contactTitle}>PHONE:</Text>
            <Text style={styles.contactInfo}>{this.formatPhoneNumber(this.props.contact.phone[key])}</Text>
            <Text style={styles.contactPhone}>{key}</Text>
          </View>
        )
      })
    )
  }
  formatPhoneNumber(numberToFormat){
    let areaCode = numberToFormat.substring(0,3)
    let mainNumber = numberToFormat.substring(4, 12)
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
    let day = dateToFormat.substring(8, 10).replace(/^[0\.]+/, "")
    let year = dateToFormat.substring(0,4)
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
    let profileImage = {uri: this.props.contact.largeImageURL}
    return(
      <View>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.props.onPressBack(null)} style={styles.left}>
            <Text style={styles.detailsHeader}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.right} onPress={this.props.handleFavorite(this.props.contact)}>
            <Image  source={this.props.contact.isFavorite ? favoriteStar : emptyFavorite}/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.imageCard}>
          <Image source={profileImage} 
          style={styles.largeImage}
          onError={() => {profileImage = defaultProfilePic}}
          defaultSource={defaultProfilePic} />
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