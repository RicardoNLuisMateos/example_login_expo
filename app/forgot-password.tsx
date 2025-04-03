import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleSendReset = () => {
    // Aquí iría la lógica para enviar el código de recuperación
    if (!email) {
      alert('Por favor ingresa tu correo electrónico');
      return;
    }
    
    // Simulación de envío exitoso
    alert('Se ha enviado un código de recuperación a tu correo electrónico');
    router.back(); // Volver a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Has olvidado tu contraseña</Text>
      
      <Text style={styles.description}>
        ¡No te preocupes! Introduce tu correo electrónico a continuación y te enviaremos un código para restablecer tu contraseña.
      </Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ingresa tu email" 
          value={email} 
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSendReset}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 'auto',
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});