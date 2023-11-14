import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      header: {
        position: 'absolute',
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