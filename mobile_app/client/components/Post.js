import React, {useState} from 'react';
import {View, StyleSheet,Image, Share, } from 'react-native'
import * as Linking from 'expo-linking';
import {Card, Title, Modal, Text, Button} from 'react-native-paper'

export default function Post(props) {
    const [openModal, setOpenModal] = useState(false);
    const post = props.post.item;
    const containerStyle = {backgroundColor: 'white', padding: 20};

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

    /*
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
            
        */

    return(
        <View style={styles.screen}>
            <Modal visible={openModal} onDismiss={()=>setOpenModal(false)} contentContainerStyle={containerStyle}>
                <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>
            <View style={styles.container}>
                <Card style={{width: '100%'}} onPress={showInReddit} onLongPress={()=>setOpenModal(true)}>
                    <Card.Cover source={{uri: post.imageUrl}}/>
                    <Card.Content>
                        <Title >{post.title}</Title>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Share</Button>
                        <Button>Delete</Button>
                    </Card.Actions>
                </Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
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
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // height: 350,
        marginBottom: 50,
        backgroundColor: '#1e2223',
    },
})