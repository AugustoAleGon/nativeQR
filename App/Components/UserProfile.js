import React, {Component} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import {ApplicationStyles, Images} from '../Themes'
import styles from './Styles/UserProfileStyles'

class UserProfile extends Component {
  render () {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <View style={styles.userHeader}>
          <Text>User Profile</Text>
        </View>
        <View style={styles.userCard}>
          <View style={styles.userWrapper}>
            <View style={styles.userImageContainer}>
              <Image
                style={styles.userImage}
                source={Images.user_placeholder} />
            </View>
            <View style={styles.userInfoContainer}>
              <Text>Name: John Smith</Text>
              <Text>Age: 38</Text>
              <Text>Location: Berlin</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default UserProfile
