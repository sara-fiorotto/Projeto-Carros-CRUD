import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Consulta} from './Telas/Listagem_Carro';
import {Cadastro} from './Telas/Cadastro_Carro'
import {Menu} from './Telas/Feed'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
     <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Consulta" component={Consulta} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
