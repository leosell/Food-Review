import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../API";
 
const RegisterUser = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState('');
 
    const { height } = useWindowDimensions();
 
    const onRegisterPressed = async () => {
        try {
            const authData = await api.post('/user/register', {
                name: name,
                email: email,
                password: password,
                admin: admin
            })
            if (authData.status === 200) {
                alert('Usuário cadastrado com sucesso')
                navigation.navigate('Login')
            }
        } catch (error) {
            alert('Usuario já cadastrado')
            console.log(error)
            setName('')
            setEmail('')
            setPassword('')
            setAdmin('')
        }
    }
 
    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
 
            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
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
                secureTextEntry={true}
            />
 
            <CustomInput
                placeholder="Admin"
                value={admin}
                setValue={setAdmin}
            />
 
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text>
                    Já tem uma conta?{" "}
                    <Text style={styles.loginText}>Faça o login</Text>
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
    loginText: {
      fontWeight: "bold",
      color: "#6200ee",
    },
});
 
export default RegisterUser;