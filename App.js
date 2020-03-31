import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./scr/screen/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from './src/screens/ColorScreen';
import ColorSquare from './src/screens/ColorSquare';
import TextScreen from './src/screens/TextScreen';
import PassScreen from './src/screens/PassScreen';
import BoxScreen from './src/screens/BoxScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: ColorSquare,
    Text: TextScreen,
    Pass: PassScreen,]
    Box: BoxScreen
  },
  
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
