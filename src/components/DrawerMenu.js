import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DrawerMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Menu </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding:50,
    }
})
