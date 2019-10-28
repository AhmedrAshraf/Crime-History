import React from 'react';
import Router from "./src/navigations";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

console.disableYellowBox = true

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#038cfc',
    accent: '#f1c40f',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Router />
    </PaperProvider>
  );
}