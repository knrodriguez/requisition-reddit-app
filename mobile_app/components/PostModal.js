import React, {useState} from 'react';
import {Modal, View, Button} from 'react-native'

export default function PostModal(props) {
    const {id} = props;
    return(
        <Modal>
            <View>
                <Button title='Share' onPress={}/>
                <Button title='Delete' onPress={}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

})