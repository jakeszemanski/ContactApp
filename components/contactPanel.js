import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image

} from 'react-native';

var emoji = require('node-emoji');

const styles = require('../styles');
const favoriteStar = require('../assets/favoriteStarTrue/favoriteTrue.png')
const defaultProfilePic = require('../assets/userSmall/userIconSmall.png')

export default class ContactPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
    }
  }


  render() {
    let profileImage = {uri: this.props.contact.smallImageURL}
    let favoriteStar = emoji.get('star')
    return (
      
        <TouchableOpacity style={styles.card} onPress={this.props.handlePress(this.props.contact)}>
          <View style={styles.row}>
            <Image source={profileImage}
            onError={() => {profileImage = defaultProfilePic}}
            defaultSource={defaultProfilePic}
            style={styles.thumbnailImage}/>
            <View style={styles.col}>
              <View style={styles.row}>
                <Text>{this.props.contact.isFavorite ? favoriteStar : null}</Text>
                <Text style={styles.contactPageName}>{this.props.contact.name}</Text>
              </View>
              <Text style={styles.contactCompany}>{this.props.contact.companyName}</Text>
            </View>
          </View>
        </TouchableOpacity>
     
    )
  }
};

module.exports = ContactPanel;