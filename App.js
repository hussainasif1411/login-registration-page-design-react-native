//LOGIN


import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
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
        <TouchableOpacity style={styles.loginBtn} >
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

export default App;


//SIGN UP


// import React from 'react';
// import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.headerText} >Sign Up</Text>
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="First Name"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="Last Name"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="Phone Number"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Confirm Password"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View >
//         <TouchableOpacity style={styles.loginBtn} >
//           <Text style={styles.loginText}>SIGN UP</Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Text style={styles.loginText}>Already have an account? Login here</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputView: {
//     width: "80%",
//     backgroundColor: "#465881",
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20
//   },
//   inputText: {
//     height: 50,
//     color: "white"
//   },
//   loginBtn: {
//     width: 280,
//     backgroundColor: "#fb5b5a",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "white",
//     fontSize: 11
//   },
//   headerText: {
//     //fontWeight: "bold",
//     fontSize: 50,
//     color: "#fb5b5a",
//     marginBottom: 20
//   }
// });

// export default App;

//WITHOUT COLORS

// import React from 'react';
// import { Text, View, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';

// const image = { uri: "https://i.pinimg.com/originals/91/bc/76/91bc76a0c2f81ac362e22ff69bbac484.jpg" };

// const App = () => {
//   return (

//     <View style={styles.container}>
//       {/* <ImageBackground source={image} style={styles.image}> */}
//         <Text style={styles.header}>User Login</Text>
//         <TextInput style={styles.loginCredentials} placeholder="User Name" />
//         <TextInput style={styles.loginCredentials} placeholder="User Password" />

//         <View style={styles.button}>
//           <Button
//             title="Login"
//           />
//         </View>
//       {/* </ImageBackground> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     //margin: 100,
//     alignItems: "center",
//     // backgroundColor: "#246EE9"
//   },
//   header: {
//     //paddingTop: 50,
//     fontSize: 30,
//     color: "darkslateblue"
//   },
//   loginCredentials: {
//     borderWidth: 1,
//     height: 40,
//     width: 200,
//     margin: 12,
//     backgroundColor: "#DCDCDC",
//     //borderRadius: 25
//   },
//   button: {
//     width: 200,
//     color: "#841584",
//     //borderRadius: 25
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
// });

// export default App;


//BG-IMAGE

// import React from 'react';
// import { Text, View, StyleSheet, ImageBackground } from 'react-native';

// const image = { uri: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };

// const App = () => {
//   return (

//     <View style={styles.container}>
//       <ImageBackground style={styles.image} source={image}>
//         <Text>Hello World!</Text>
//       </ImageBackground>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     //margin: 100,
//     alignItems: "center",
//     // backgroundColor: "#246EE9"
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'stretch',
//     justifyContent: "center"
//   },
// })

// export default App;

