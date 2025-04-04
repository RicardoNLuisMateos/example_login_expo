import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleCreateAccount = () => {
    // Aquí iría la lógica para crear la cuenta
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    // Simulación de registro exitoso
    alert('Cuenta creada con éxito');
    router.replace('/sign-in');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            
            <Text style={styles.title}>Register</Text>

            <View style={styles.formContainer}>
              <View style={styles.nameRow}>
                <View style={styles.nameField}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput 
                    style={styles.input} 
                    value={firstName}
                    onChangeText={setFirstName}
                  />
                </View>
                
                <View style={styles.nameField}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput 
                    style={styles.input} 
                    value={lastName}
                    onChangeText={setLastName}
                  />
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="••••••••"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.passwordHint}>must contain 8 char.</Text>
              </View>

              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="••••••••"
                    secureTextEntry={!confirmPasswordVisible}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                    <Ionicons name={confirmPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <TouchableOpacity 
                style={styles.button}
                onPress={handleCreateAccount}
              >
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>

              <Text style={styles.termsText}>
                By continuing, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nameField: {
    width: '48%',
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  passwordHint: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },
  bottomContainer: {
    marginTop: 'auto',
  },
  button: {
    backgroundColor: "#2D7A4A",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    marginBottom: 20,
  },
  linkText: {
    color: "#0066cc",
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;
