import {StyleSheet} from 'react-native'
import {ApplicationStyles, Colors} from '../../Themes'

export default StyleSheet.create({
  userHeader: {
    ...ApplicationStyles.screen.header,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userCard: {
    justifyContent: 'center',
    marginTop: 20
  },
  userWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  userImageContainer: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: Colors.tealBlueIOS
  },
  userImage: {
    width: 100,
    height: 100
  },
  userInfoContainer: {
      paddingLeft: 10,
      justifyContent: 'center'
  }
})
