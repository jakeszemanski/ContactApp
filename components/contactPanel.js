import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image

} from 'react-native'
import { getTheme } from 'react-native-material-kit'

const theme = getTheme();
const styles = require('../styles');
const favoriteStar = require('../assets/favoriteStarTrue/favoriteTrue.png')

export default class ContactPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
    }
  }

  render() {
    console.log("this.props", this.props.contact)
    return (
      
        <TouchableOpacity style={styles.card} onPress={this.props.handlePress(this.props.contact)}>
          <View style={styles.row}>
            <Image source={{uri: this.props.contact.smallImageURL}}
            style={styles.thumbnailImage}/>
            <View style={styles.col}>
              <View style={styles.row}>
                <Image source={this.props.contact.isFavorite ? favoriteStar : null}/>
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