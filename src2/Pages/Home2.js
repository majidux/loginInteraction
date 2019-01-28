import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FrontPage2 from "../Components/FrontPage2";

export default class Home2 extends Component {
    render() {
        return (
            <View style={styles.homePage}>
                <FrontPage2/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    homePage: {
        flex: 1,
    }
});