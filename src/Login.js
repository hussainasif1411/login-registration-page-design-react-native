import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

const Login = ({ navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Profile');
  }
  
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.headerText} >User Login</Text>
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="User Name"
          placeholderTextColor="#003f5c"
        // onChangeText={text => this.setState({ email: text })} 
        />
      </View>
      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
        // onChangeText={text => this.setState({ email: text })} 
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.loginText}>Don't have an account? Signup here</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  loginBtn: {
    width: 280,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 13
  },
  headerText: {
    //fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  forgot: {
    color: "white",
    fontSize: 11
  }
});

export default Login;