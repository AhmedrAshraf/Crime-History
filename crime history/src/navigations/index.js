import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Home, Crime, Dashboard, Forces } from '../screens'

const MainNavigator = createBottomTabNavigator({ Home, Crime, Dashboard, Forces });

const Routers = createAppContainer(MainNavigator);

export default Routers;

