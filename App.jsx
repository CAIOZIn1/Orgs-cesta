import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/pages/cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      < Cesta />
    </SafeAreaView>
  );
}