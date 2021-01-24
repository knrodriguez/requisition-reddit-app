import React, {useState} from 'react';
import {Modal, View, Button, StyleSheet} from 'react-native'

export default function PostModal(props) {
    const {id} = props;
    return(
        <Modal>
            <View style={styles.modal}>
                <Button title='Share' />
                <Button title='Delete'/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: '200px',
        height: '200px'
    }
})