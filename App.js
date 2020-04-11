import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import RandomColorGen from './src/screens/RandomColorGen';
import ColorAdjuster from './src/screens/ColorAdjuster';
import TextInputHandler from './src/screens/TextInputHandler';
import LayoutExercise from './src/screens/LayoutExercise';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Friends: ListScreen,
    ImageList: ImageScreen,
    Counter: CounterScreen,
    ColorGen: RandomColorGen,
    Adjuster: ColorAdjuster,
    TextInput: TextInputHandler,
    LayoutExercise: LayoutExercise
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "First React Native App"
    }
  }
);

export default createAppContainer(navigator);
