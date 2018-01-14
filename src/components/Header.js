import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={headerContainer}>
      <Image  />
        <Text style={header}>- Cryptocurrency -{`\n`}Tracker</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 40,
        alignItems: "center",
        borderBottomColor: "#fafafa",
        borderBottomWidth: 1
    },
    header: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#999999',
        textShadowOffset: {width: 3, height: 4 },
        textShadowRadius: 21,
        marginBottom: 20
    },
    headerIcon: {
      width: 100,
      height: 100
    }
});

const { headerContainer, header } = styles;
