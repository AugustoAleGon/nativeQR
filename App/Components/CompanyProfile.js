import React, {Component} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

// Styles
import {ApplicationStyles, Images} from '../Themes'
import styles from './Styles/CompanyProfileStyles'

class CompanyProfile extends Component {
  render () {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <View style={styles.companyHeader}>
          <Text>Company Profile</Text>
        </View>
        <View style={styles.companyCard}>
          <Image
            style={styles.logoStyle}
            source={Images.wellnow_logo} />
          <Text style={styles.titleCompany}>WellNow Company</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text>Detail description:</Text>
          <Text>
            Outstanding mobile massage within 2h at your home or hotel room!
          </Text>
        </View>
      </View>
    )
  }
}

export default CompanyProfile
