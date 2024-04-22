import React,{ StrictMode }  from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>
  </StrictMode>
);
