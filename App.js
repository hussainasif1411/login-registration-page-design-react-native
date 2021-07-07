//**********************************WORKING ROUTES*****************************************/

import React from 'react';
import AppRoute from './routes/AppRoutes';

const App = () => {
  return(
    <AppRoute />
  )
}
export default App;


//***********************************WORKING ROUTE SAME FOLDER******************************/

// import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// //import {AppRoute} from './routes/AppRoutes';

// import Login from './src/Login';
// import Signup from './src/Signup';
// import Profile from './src/Profile';

// const App = () => {

//   const Navigator = createStackNavigator(
//     {
//         Signup: Signup,
//         Login: Login,
//         Profile: Profile
//     },
//     {
//         initialRouteName: 'Signup',
//     }
//   );

//   const AppRoute = createAppContainer(Navigator);

//   return(
//     <AppRoute />
//   )
// }
// export default App;

//***************************************HELLO WORLD******************************************/

// import React from 'react';
// import { View, Text } from 'react-native';

// const App = () => {
//   return(
//     <View>
//       <Text>Hello World</Text>
//     </View>
//   )
// }
// export default App;

//******************************************TEXT INPUT STATE***************************************/

// import React, { useState } from 'react';
// import { View, TextInput, Image, TouchableOpacity } from 'react-native';
// import { event } from 'react-native-reanimated';

// const App = () => {

//   const [input, setInputText] = useState("Asif");
//   const [editableState, setEditableState] = useState(false);

//   const handleEditableState = () => {
//     setEditableState(true);
//   }

//   const handleInputText = () => {
//     setInputText(event.target.value);
//   }

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <TextInput
//         style={{ borderWidth: 1, width: 100, height: 40, color: 'black' }}
//         value={input}
//         editable={editableState}
//         onChangeText={handleInputText}
//       />
//       <TouchableOpacity onPress={handleEditableState}>
//         <Image style={{
//           marginRight: 40,
//           marginLeft: 10,
//           marginTop: 5,
//           width: 40,
//           height: 50,
//         }} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
//       </TouchableOpacity>
//     </View>
//   )
// }
// export default App;


//*******************************ROUTING EXAMPLE********************************************/

// import React from 'react';
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }


// import React from 'react';
// import {View, Text} from 'react-native';
// //import AppRoutes from './routes/AppRoutes';
// import { createStackNavigator} from 'react-navigation-stack';
// //import { NavigationContainer } from 'react-navigation';
// import { createAppContainer } from 'react-navigation';

// // const App = () => {
// //   return(
// //     <View>
// //       <AppRoutes />
// //       <Text>Hello World!</Text>
// //     </View>
// //   )
// // }


// function HomeScreen(){
//   return(
//     <Text>Home Screen</Text>import React from 'react';
// import {View, Text} from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// //import {AppRoute} from './routes/AppRoutes';

// import Login from './src/Login';
// import Signup from './src/Signup';
// import Profile from './src/Profile';

// const App = () => {

//   const Navigator = createStackNavigator(
//     {
//         Signup: Signup,
//         Login: Login,
//         Profile: Profile
//     },
//     {
//         initialRouteName: 'Signup',
//     }
//   );

//   const AppRoute = createAppContainer(Navigator);

//   return(
//     <AppRoute />
//   )
// }
// export default App;
// }

// const Stack = createStackNavigator();

// export default function App(){
//   return(
//         <createAppContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//           </Stack.Navigator>

//         </createAppContainer>
//   )
// }
