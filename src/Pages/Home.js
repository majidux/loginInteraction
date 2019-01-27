import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FrontPage from "../Components/FrontPage";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.homePage}>
                <FrontPage/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    homePage: {
        flex: 1,
    }
});