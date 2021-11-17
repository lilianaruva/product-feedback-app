import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import Suggestion from './pages/Suggestions/Suggestions';


function App() {
  return (
    <>
    <ChakraProvider>
      <Suggestion/>
    </ChakraProvider>
    </>
  );
}

export default App;
