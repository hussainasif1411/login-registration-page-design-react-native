import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

const Signup = ({ navigation }) => {

  const handleSignUp = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.headerText} >Sign Up</Text>
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
        // onChangeText={text => this.setState({ email: text })} 
        />
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
        // onChangeText={text => this.setState({ email: text })} 
        />
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
        // onChangeText={text => this.setState({ email: text })} 
        />
      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Email"
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

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
        // onChangeText={text => this.setState({ email: text })} 
        />
      </View>

      <View >
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.loginText}>Already have an account? Login here</Text>
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
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 11
  },
  headerText: {
    //fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 20
  }
});

export default Signup;