import { StyleSheet,View,Appearance } from 'react-native';
import { PaperProvider,Text,Button, DefaultTheme } from 'react-native-paper';
import * as React from 'react';
import HourPicker from './components/HourPicker';

export default function App() {
  const LightTheme = {
    ...DefaultTheme,
    colors : {
      ...DefaultTheme.colors,
      foreground: "#5c6a72",
      background: "#fffbef",
    }
  };

  const DarkTheme = {
    ...DefaultTheme,
    colors : {
      ...DefaultTheme.colors,
      background: "#272E33",
      foreground: "#d3c6aa",
    }
  }

  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  const [visible, setVisible] = React.useState(false)
  const showModal = () => {
    setVisible(true);
    console.log(colorScheme)
  }

  return (
    <PaperProvider theme={theme}>
    <View style={[styles.container,{backgroundColor: theme.colors.background}]}>
      <Text variant= 'headlineSmall' style={{color: theme.colors.foreground}}>When did you woke up today?</Text>
      <Button mode="elevated" textColor={theme.colors.background} onPress={showModal} buttonColor={theme.colors.foreground}>
         Pick Hour
      </Button>
      <Button mode="elevated" disabled={true} textColor={theme.colors.background}  buttonColor={theme.colors.foreground}>
         Fix your sleep schedule
      </Button>
      <HourPicker visible={visible} setVisible={setVisible}/>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

});

