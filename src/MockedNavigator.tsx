import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export const MockedNavigator: React.FC<
  React.ComponentProps<typeof Stack['Screen']>
> = ({ ...screenProps }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen {...screenProps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
