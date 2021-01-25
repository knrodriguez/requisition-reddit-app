import React, {useState} from 'react';
import {Pressable, View, StyleSheet, Text, Modal, Button, Image, Share} from 'react-native'
import {Redirect} from 'react-router-native'
import * as Linking from 'expo-linking'

export default function Post(props) {
    const [openModal, setOpenModal] = useState(false);
    const post = props.post.item;

    const showModal = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false);
    }

    const showInReddit = () => {
        Linking.openURL(post.redditUrl);
    }

    const shareRedditLink = async () => {
        try {
            const result = await Share.share({message: post.redditUrl});
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
        } catch (error) {
            console.log('COULD NOT SHARE!',error)
        }
    }

    return(
        <Pressable android_ripple={{color:'gray'}} onPress={showInReddit} onLongPress={showModal}>
            <View style={styles.modal}>
                <Modal
                    visible={openModal}
                    presentationStyle='overFullScreen'
                    transparent={true}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalButtons}>
                            <Button title='Share' onPress={shareRedditLink}/>
                            <Button title='Delete' onPress={() => props.handleDelete(post.id)}/>
                        </View>
                    </View>
                </Modal>
                <View style={styles.container}>
                    <Image source={{uri: post.imageUrl}} style={styles.postImage}/>
                    <Text style={styles.title}>{props.post.item.title}</Text>
                </View>
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
        width: '100%',
        height: 400
    },
    modal:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtons: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    postImage: {
        paddingTop: '50%',
        paddingBottom: '50%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
})