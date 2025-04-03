import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { useSession } from '../ctx';

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola</Text>
      <Text style={styles.subTitle}>Ingresa a tu cuenta</Text>
      <TextInput style={styles.textInput} placeholder="Correo electrónico" value={email} onChangeText={setEmail}/>
      <TextInput style={styles.textInput} placeholder="Contraseña" value={password} onChangeText={setPassword}/>
      {/* Forgot Password */}
      <TouchableOpacity 
        onPress={() => router.push('/forgot-password')}
        style={styles.forgotPasswordContainer}
      >
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => { 
                if (signIn(email, password)) {
                    // Navigate after successful sign-in
                    router.replace('/');
                  } else {
                    alert('Invalid credentials');
                }
              }}>
            Iniciar sesión
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}
          onPress={() => router.push('/register')}
        >
            Registrarse
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f1f1f1",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 80,
      color: "#000",
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 30,
      color: "gray",
      fontWeight: "bold",
    },
    textInput: {
      padding: 10,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: "#fff",
      paddingStart: 30,
    },
    button: {
      padding: 10,
      width: '45%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "#f1f1f1",
      fontSize: 20,
      fontWeight: "bold",
    },
    forgotPasswordContainer: {
      alignSelf: 'flex-end',
      marginRight: '10%',
      marginTop: 8,
      marginBottom: 20,
    },
    forgotPasswordText: {
      color: '#0066cc',
      fontSize: 14,
    },
  });
  