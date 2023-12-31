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

  cityImages: {
    resizeMode: 'cover',
    width: "100%",
    height: "100%",
  },

  cityImageView: {
    width: 180,
    height: 200,
    aspectRatio: 1 * 1.4,
    padding: 5,
  },

  citypgSubheaders: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },

  cityScrollview: {
    marginLeft: 7,
    marginRight: 15
  },

  cityTexts: {
    color: 'white',
    fontSize: 16,
    textAlign: 'justify'
  },

  cityData: {
    fontWeight: 'bold'
  },

  back: {
    marginTop: 10,
    marginLeft: 10,
  },

  quizStartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 10,
  },

  quizStart: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  quizContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  quizQuestion: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  quizOptions: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  quizResults: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
  },

  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40
  },

  headerForgot: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40
  },

  label: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 30
  },

  textInput: {
    color: 'white',
    marginHorizontal: 30,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 15,
    marginBottom: 30,
    marginTop: 20,
    fontSize: 20,
    padding: 8,
  },

  forgotPassword: {
    color: 'white',
    fontSize: 16,
    marginLeft: 30,
    textDecorationLine: 'underline',
  },

  user: {
    color: 'white',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 16,
    marginLeft: 30,
    textDecorationLine: 'underline',
  },

  profileBottomText: {
    color: 'white',
    marginTop: 40,
    marginBottom: 30,
    fontSize: 16,
    marginLeft: 30,
    textDecorationLine: 'underline',
  },

  button: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 30
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
  },

  iconLine: {
    marginBottom: 30,
    marginLeft: 10,
  },

  logout: {
   marginLeft: 13,
   marginTop: 40
  },

  createPassword: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40
  },

  loggedHeader: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40
  },

  loggedMediumHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15
  },

  about: {
    color: 'white',
    marginHorizontal: 15,
    fontSize: 16
  },

  profile: {
    fontSize: 18,
    color: 'white',
  },
})