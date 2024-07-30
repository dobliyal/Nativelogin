import { createStackNavigator } from '@react-navigation/stack';
import ScreenSignup from '../Screens/ScreenSignup/ScreenSignup';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={ScreenSignup} />
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Home" component={ScreenHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
