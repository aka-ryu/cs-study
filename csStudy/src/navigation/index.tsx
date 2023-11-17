import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../interface/navigation';
import Routes from './Routes';
import Home from '../screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
