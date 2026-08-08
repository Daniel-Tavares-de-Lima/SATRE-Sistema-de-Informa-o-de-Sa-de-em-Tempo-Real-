import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from '../screens/InicioScreen';
import MapaScreen from '../screens/MapaScreen';
import HospitaisScreen from '../screens/HospitaisScreen';
import ConfiguracoesScreen from '../screens/ConfiguracoesScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={InicioScreen} />
        <Tab.Screen name="Mapa" component={MapaScreen} />
        <Tab.Screen name="Hospitais" component={HospitaisScreen} />
        <Tab.Screen name="Configurações" component={ConfiguracoesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}