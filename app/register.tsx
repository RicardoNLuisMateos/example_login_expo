import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Register</Text>

      <TextInput style={styles.input} placeholder="First Name" defaultValue="John" />
      <TextInput style={styles.input} placeholder="Last Name" defaultValue="Doe" />
      <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <Text style={styles.passwordHint}>must contain 8 char.</Text>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Ionicons name={confirmPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By continuing, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  passwordHint: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2D7A4A",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 200,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    marginTop: 10,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;
