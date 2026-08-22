import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from '../screens/InicioScreen';
import MapaScreen from '../screens/MapaScreen';
import HospitaisScreen from '../screens/HospitaisScreen';
import ConfiguracoesScreen from '../screens/ConfiguracoesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetalheScreen from '../screens/DetalheScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs(){
  return (
      <Tab.Navigator>
        <Tab.Screen name="Início" component={InicioScreen} />
        <Tab.Screen name="Mapa" component={MapaScreen} />
        <Tab.Screen name="Hospitais" component={HospitaisScreen} />
        <Tab.Screen name="Configurações" component={ConfiguracoesScreen} />
      </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Detalhe" component={DetalheScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}