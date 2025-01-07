import { StyleSheet,View,Appearance } from 'react-native';
import { PaperProvider,Text,Button, DefaultTheme } from 'react-native-paper';
import * as React from 'react';
import HourPicker from './components/HourPicker';
import { TextInput } from "react-native-paper";

export default function App() {
  const LightTheme = {
    ...DefaultTheme,
    colors : {
      ...DefaultTheme.colors,
      foreground: "#5c6a72",
      background: "#fffbef",
      red: "#f85552"
    }
  };

  const DarkTheme = {
    ...DefaultTheme,
    colors : {
      ...DefaultTheme.colors,
      background: "#272E33",
      foreground: "#d3c6aa",
      red: "#e67e80",
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
      <Text variant= 'headlineMedium' style={{color: theme.colors.foreground}}>When did you woke up today?</Text>
        <TextInput  placeholder="Pick the hour" placeholderTextColor={theme.colors.foreground} editable={false} style={{height: 40, width: 200}} mode="outlined" outlineColor={theme.colors.foreground} textColor={theme.colors.foreground} onPress={showModal} />
      <Button mode="elevated" textColor={theme.colors.background} onPress={showModal} buttonColor={theme.colors.foreground}>
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
    gap: 30,
  },

});

