import React, {useState} from 'react';
import {Pressable, View} from 'react-native'
import PostModal from './PostModal';

export default function Post(props) {

    const openModal = () => {
        <PostModal id={}/>
        //delete icon
        //share icon
    }

    return(
        <Pressable android_ripple={{color:'gray'}} onLongPress={openModal}>
            <View>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

})