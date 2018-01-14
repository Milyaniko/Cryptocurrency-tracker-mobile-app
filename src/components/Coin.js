import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { coinIcons } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        margin: 20,
        marginBottom: 20,
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255, 0.6)',
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    separator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    percentChangePlus: {
        color: "#0000ff",
        fontWeight: "bold",
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold"
    },
    valueContainer: {
        display: "flex",
        paddingTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

const {
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    separator,
    percentChangePlus,
    percentChangeMinus,
    valueContainer
            } = styles;


const Coin = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {

    return (
        <View style={container}>

            <View style={upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: coinIcons[symbol] }} />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={separator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>

            <View style={statisticsContainer}>
                <Text>Change for 24h:</Text>
                <Text>Change for 7d:</Text>
            </View>
            <View style={valueContainer}>
                <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus}>{percent_change_24h} % </Text>
                <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus}>{percent_change_7d} % </Text>
            </View>
        </View>
    );
};

export default Coin;