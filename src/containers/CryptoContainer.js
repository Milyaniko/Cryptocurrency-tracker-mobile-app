import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import fetchCoin from '../Actions/FetchCoin';
import Coin from '../components/Coin';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from '../components/Header'

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCoin();
    }

    coinRender() {
        return coinCard = this.props.crypto.data.map((item) =>
            <Coin
                key={item.name}
                symbol={item.symbol}
                coin_name={item.name}
                price_usd={item.price_usd}
                percent_change_24h={item.percent_change_24h}
                percent_change_7d={item.percent_change_7d}
            />
        )
    }

    render() {
        if (this.props.crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        textContent={"Loading..."}
                        textSyle={{ color: "#253145" }}
                        animation="fade"
                        visible={this.props.crypto.isFetching}
                    />
                </View>
            );
        }
        return (
            <ImageBackground style={background} source={require('../Images/background2.jpg')}>
                <ScrollView contentContainerStyle={contentContainer}>
                    <Header />
                    {this.coinRender()}
                </ScrollView>
            </ImageBackground>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    };
};

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'rgba(0,0,0,.1)',
        marginBottom: 30
    },
    background: {
        height: '100%',
        width: '100%',
    }
})

const { contentContainer, background } = styles;

export default connect(mapStateToProps, { fetchCoin })(CryptoContainer)