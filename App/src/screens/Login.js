import { StyleSheet, TouchableOpacity, View, Image, useWindowDimensions, Text, TextInput } from "react-native";
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../API/index"
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


            const onLoginPressed = async () => {
                try {
                    const authData = await api.post('/login', {
                        email: email,
                        password: password
                    })
                    if (authData.status === 200) {
                        await AsyncStorage.setItem('token', authData.data.token)
                        navigation.navigate('Home')
                    }
                } catch (error) {
                    alert('Login/Senha Invalido')
                    console.log(error)
                    setEmail('')
                    setPassword('')
                }
            }

    const { height } = useWindowDimensions();

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={false}
            />

            <CustomButton text="Login" onPress={onLoginPressed} />

            <TouchableOpacity
                onPress={() => navigation.navigate("RegisterUser")}
            >
                <Text>
                    Não tem uma conta?{" "}
                    <Text style={styles.createAccountText}>
                        Crie uma
                    </Text>
                </Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    createAccountText: {
        fontWeight: "bold",
        color: "#6200ee",
    },
});

export default Login;