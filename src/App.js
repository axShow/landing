import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import SplitScreen from "./splitted_screen";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SplitScreen/>
    </ChakraProvider>
  );
}

export default App;
