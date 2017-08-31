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
    backgroundColor: 'white',
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
  imageCard: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
   largeImage: {
    width: 150,
    height: 150,
    
    flex: 1
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
    borderWidth: 1,
    borderColor: 'gray'
  },
  contactPageName: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold'
  },
  contactTitle: {
    flex: 1,
    textAlign: 'left',
    fontSize: 13,
    color: '#696969'
  },
  contactInfo: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    flexDirection: 'row'
  },
  contactPhone: {
    flex: 1,
    textAlign: 'right',
    fontSize: 13,
    color: '#696969',
    flexDirection: 'row'
  },
    contactAddress: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  favoriteMain: {
    flexDirection: 'row'
  },
  topBar: {
    backgroundColor: '#d0d0d0',
    height:64,
    flexDirection:'row',
    borderWidth: 1,
    borderColor: 'gray'
  },
  headerBar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    height:64,
    flexDirection:'row',
    borderWidth: 1,
    borderColor: 'gray'
  },
  left: {
    marginLeft: 10,
    marginTop:25,
    flex: 1,
    alignSelf: 'flex-start'
  },
  detailsHeader: {
    fontSize: 20,
    color: '#00bfff',
  },
  right: {
    marginRight: 10,
    marginBottom:19,
    alignSelf: 'flex-end',
  },
  listTitle: {
    backgroundColor: 'gray',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10
  },
  titleContact: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});