
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import Suggestion from './pages/Suggestions/Suggestions';
import NewFeedBack from './pages/NewFeedBack/NewFeedBack';

function App() {
  return (
    <>
    <ChakraProvider>
      
      <NewFeedBack/>
    </ChakraProvider>
    </>
  );
}

export default App;
