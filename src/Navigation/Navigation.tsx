import { createStackNavigator } from '@react-navigation/stack';
import ScreenSignup from '../Screens/ScreenSignup/ScreenSignup';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import { NavigationContainer } from '@react-navigation/native';
import { setLoggedIn } from '../Redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/rootReducer';
import { AuthStackParamList,AppStackParamList } from './types';


const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

function Navigation() {
const isAuthenticated=useSelector((state:RootState)=>state.auth.isLoggedIn)

  return (
    <NavigationContainer>
        {
          isAuthenticated ?(
          <AppStack.Navigator initialRouteName="Home">
              <AppStack.Screen name="Home" component={ScreenHome} />
          </AppStack.Navigator>
          ):
          (
            <AuthStack.Navigator initialRouteName="Signup">
            <AuthStack.Screen name="Signup" component={ScreenSignup} />
            <AuthStack.Screen name="Login" component={ScreenLogin} />
            </AuthStack.Navigator>
          )
        }
        
        
     
    </NavigationContainer>
  );
}

export default Navigation;
