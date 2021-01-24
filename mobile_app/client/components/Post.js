import React, {useState} from 'react';
import {Pressable, View, StyleSheet, Text, Modal, Button} from 'react-native'
import PostModal from './PostModal';

export default function Post(props) {
    const [openModal, setOpenModal] = useState(false);
    const showModal = () => {
        setOpenModal(true);
        //delete icon
        //share icon
    }
    console.log(props)
    return(
        <Pressable android_ripple={{color:'gray'}} onPress={showModal} onLongPress={showModal}>
            <Modal
                style={styles.modal}
                visible={openModal}
            >
                <View style={styles.modal}>
                    <Button title='Share' />
                    <Button title='Delete'/>
                </View>
            </Modal>
            <View style={styles.container}>
                <Text>{props.post.item.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4%',
    },
    modal:{
        width: '60%',
        height: 'auto'
    }
})