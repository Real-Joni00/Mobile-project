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
    height: 275,
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  flagTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  city: {
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    textAlign: 'center',
  },

  back: {
    marginTop: 10,
    marginLeft: 10,
  },

  header: {
    marginTop: 40,
    backgroundColor: 'rgb(148, 30, 216)',
    flexDirection: 'row',
  },

  title: {
    fontFamily: 'Poppins',
    color: 'rgb(255, 255, 255)',
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },

  text: {
    fontFamily: 'Akatab',
    color: 'rgb(255, 255, 255)',
    fontSize: 30,
    margin: 30,
  },

  text2: {
    fontFamily: 'Akatab',
    color: 'rgb(255, 255, 255)',
    fontSize: 23,
    textAlign: 'center',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
  },
})