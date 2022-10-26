import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../API";

const RegisterRestaurants = ({ navigation }) => {

    const [ name, setName ] = useState('');
    const [ cnpj, setCnpj ] = useState('');
    const [ endereco, setEndereco ] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post('/restaurant/register', {
                name: name,
                cnpj: cnpj,
                endereco: endereco
            })

            if (authData.status === 200) {
                alert('Restaurante cadastrado')
            }
        } catch (err) {
            console.log(err)
            alert('Restaurante já cadastrado')
            setName('')
            setCnpj('')
            setEndereco('')
        }
    }

    return (
        <View style={styles.view}>
            <Image 
                source={Logo}
                style={[styles.logo, { height: height * 0.3}]}
                resizeMode="contain"
            />

            <CustomInput 
                placeholder='Nome'
                value={name}
                setValue={setName}
            />

            <CustomInput 
                placeholder='CNPJ'
                value={cnpj}
                setValue={setCnpj}
            />
            
            <CustomInput 
                placeholder='Endereço'
                value={endereco}
                setValue={setEndereco}
            />

            <CustomButton 
                text='Cadastrar'
                onPress={onRegisterPressed}
            />
        </View>
    )
}

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
})

export default RegisterRestaurants;