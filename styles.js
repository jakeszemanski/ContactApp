var {StyleSheet, Platform, Dimensions} = require('react-native');
var {MKColor} = require('react-native-material-kit');
 

    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height

module.exports = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: width,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 1,
    marginTop: 17
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 7, marginRight: 7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10, marginBottom: 20,
  },
  legendLabel: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 10, marginBottom: 20,
    fontSize: 12,
    fontWeight: '300',
  },
  thumbnailImage: {
    width: 50,
    height: 50,
  },
   largeImage: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactName: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  contactCompany: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: '#696969'
  },
  card: {
    flex: 1,
    padding: 15,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  topBar: {
    backgroundColor: 'gray',
    borderWidth: 0.5,
    borderColor: 'gray'
  }
});