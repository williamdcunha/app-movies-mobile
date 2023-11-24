import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";

import CombineReducers from "./src/reducers";
import Home from "./src/Home";
import Details from "./src/Details";

const App = () => {
  const Stack = createStackNavigator();

  const Store = createStore(CombineReducers);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
