import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flagContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  imageFront: {
    width: 222, 
    height: 290,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageHeader: {
    width: 300,
    height: 150
  },

  headerLogo: {
    alignItems:'center',
    marginTop: 30
  },

  frontTitle: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    margin: 20,
  }, 

  slogan: {
    fontSize: 18,
    color: 'white',
    margin: 20,
    fontStyle: 'italic'
  }, 

  flags: {
    flexBasis: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flag: {
    marginTop: 50,
    height: 130,
    width: 130,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flagTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  cityBg: {
    margin: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'white',
  },

  cityText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  back: {
    marginTop: 10,
    marginLeft: 10,
  },
})