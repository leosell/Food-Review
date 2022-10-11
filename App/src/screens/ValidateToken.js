import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import api from "../API/index";

const ValidadeToken = ({ navigation }) => {

    useEffect(() => {

        setTimeout(() => {
            const validadeToken = async () => {
                const token = await AsyncStorage.getItem("token")
                if (token) {
                    navigation.navigate('Home')
                } else {
                    navigation.navigate('Login')
                }
            }
            validadeToken()
        }, 1000)

    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator 
                color={"#FFBA52"}
                size={45}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ValidadeToken;