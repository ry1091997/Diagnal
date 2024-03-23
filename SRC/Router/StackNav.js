import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import LandingPage from '../Screens/LandigPage';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="landing" component={LandingPage} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

export {MainStack};
