import {StyleSheet} from 'react-native'
import {ApplicationStyles, Colors} from '../../Themes'

export default StyleSheet.create({
  companyHeader: {
    ...ApplicationStyles.screen.header,
    justifyContent: 'center',
    alignItems: 'center'
  },
  companyCard: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    width: 200,
    height: 200
  },
  titleCompany: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.greyIOS
  },
  detailContainer: {
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  }
})
