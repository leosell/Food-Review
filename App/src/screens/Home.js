import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context, Provider } from '../context/dataContext'

const Home = ({navigation}) => {
  const [ counter, setCounter ] = useState(0);
  useEffect(() => {
    document.title = "React App"
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <h1> { counter } </h1>
      <Button
        title='Aumentar'
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title='Zerar'
        onPress={() => setCounter(0)}
      />

      <TouchableOpacity onPress={() => navigation.navigate('RegisterRestaurants')}>
        <Text>
          Cadastrar restaurantes {" "}
          <Text style={styles.registerText}>Registrar Restaurantes</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30
  },
  registerText: {
    fontWeight: "bold",
    color: "#6200ee",
  }
})

export default () => {
  return (
    <Provider>
      <Home />
    </Provider>
  )
}