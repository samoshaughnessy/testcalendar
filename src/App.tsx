/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react'
// import { Component } from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.sam}>Joining Fee of 4000$$$$</Text>
//         <Text>Type Scripting bitches</Text>
//        </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   sam: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: 'red',

//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
registerScreens();

// eslint-disable-next-line no-console
console.ignoredYellowBox = ['Remote debugger'];

/*
import {LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};
LocaleConfig.defaultLocale = 'fr';
*/

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Menu',
    title: 'WixCal',
  },
  appStyle: {
    navBarBackgroundColor: '#00adf5',
    navBarTextColor: 'white',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    autoAdjustScrollViewInsets: true
  }
});