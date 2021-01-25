import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function StatusBar(props) {
    return (
        <View style={styles.statusBar}></View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: 43,
        zIndex: 1,
        backgroundColor: 'white'
    }
})