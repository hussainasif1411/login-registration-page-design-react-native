//********************************************USER PROFILE PAGE**********************************************/


import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const App = () => {

  const [input, setInput] = useState("9584801219");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userProfileText}>User Profile</Text>
      </View>

      <View>
        <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        <Image style={styles.imageUpload} source={require('./assets/image-ipload.jpg')} />
      </View>

      <View style={styles.bodyContent}>
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.userData}>Asif Hussain</Text>
        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.userData}>Pathan</Text>
        <Text style={styles.label}>Phone Number</Text>

        <View style={styles.phoneNumberView}>
          <TextInput style={styles.inputText} value={input}></TextInput>
          <TouchableOpacity>
            <Image style={styles.phonebookIcon} source={require('./assets/phone-book.jpg')}  />
          </TouchableOpacity>
        </View>


        {/* <Text style={styles.userData}>9584801219</Text> */}
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    header: {
      backgroundColor: "#00BFFF",
      height: 200,
    },
    userProfileText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 40,
      marginLeft: 83,
      marginTop: 20
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      //borderWidth: 4,
      //borderColor: "white",
      marginBottom: 10,
      alignSelf: 'center',
      position: 'absolute',
      marginTop: -70
    },
    bodyContent: {
      marginTop: 80,
      marginLeft: 70
      //justifyContent: 'center',
      //alignItems: 'center'
      //position: 'absolute',
    },
    userData: {
      fontSize: 18,
      color: "black",
      fontWeight: '600',
    },
    label: {
      color: '#C0C0C0',
      marginTop: 10
    },
    phoneNumberView: {
      flexDirection: "row",
      //justifyContent: "space-between"
    },
    inputText: {
      borderWidth: 1,
      height: 40,
      width: '80%',
      marginTop: 5
    },
    phonebookIcon: {
      marginRight: 40,
      marginLeft: 10,
      //marginTop: 5,
      width: 40,
      height: 50,
      opacity: 0.7
    },
    buttonContainer: {
      marginTop: 30,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: "#00BFFF",
    },
    buttonText: {
      color: '#FFFFFF'
    },
    imageUpload: {
      width: 30,
      height: 29,
      borderRadius: 100,
      marginLeft: 203,
      marginTop: 30
    },

  }
)

export default App;


//*************************************HELLO WORLD***************************************************/


// import React from 'react';
// import {View, Text} from 'react-native';

// const App = () => {
//   return(
//    <View>
//      <Text>Hello World!</Text>
//    </View>
//   )
// }

// export default App;


//*********************************************LOGIN**************************************************



// import React from 'react';
// import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.headerText} >User Login</Text>
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="User Name"
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

//       <View>
//         <TouchableOpacity>
//           <Text style={styles.forgot}>Forgot Password?</Text>
//         </TouchableOpacity>
//       </View>

//       <View >
//         <TouchableOpacity style={styles.loginBtn} >
//           <Text style={styles.loginText}>LOGIN</Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Text style={styles.loginText}>Don't have an account? Signup here</Text>
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
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "white",
//     fontSize: 13
//   },
//   headerText: {
//     //fontWeight: "bold",
//     fontSize: 50,
//     color: "#fb5b5a",
//     marginBottom: 40
//   },
//   forgot: {
//     color: "white",
//     fontSize: 11
//   }
// });

// export default App;



//****************************************SIGN UP****************************************************************



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



//*********************************************WITHOUT COLORS******************************************************************************



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



//*********************************************8BG-IMAGE************************************************************************



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

