import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routes from "../common/routes";
import Details from "../components/users/userDetails";
import UsersListScreen from "../components/users/allUsers";
const UsersNavigator = () => {
  const stack = createNativeStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen name={routes.users} component={UsersListScreen} />
      <stack.Screen name={routes.details} component={Details} />
    </stack.Navigator>
  );
};

export default UsersNavigator;