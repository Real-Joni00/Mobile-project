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
        alignItems: 'center',
        justifyContent: 'center',
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

      header: {
        marginTop: 40,
        backgroundColor: 'rgb(148, 30, 216)',
        flexDirection: 'row',
      },

      title: {
        color: 'rgb(23, 58, 255)',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 23,
        textAlign: 'center',
        margin: 10,
      },
})