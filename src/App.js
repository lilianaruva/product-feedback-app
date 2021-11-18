
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import Suggestion from './pages/Suggestions/Suggestions';
import NewFeedBack from './pages/NewFeedBack/NewFeedBack';
import EditFeedBack from './pages/EditFeedBack/EditFeedBack';

function App() {
  return (
    <>
    <ChakraProvider>
      
      
      <EditFeedBack/>
    </ChakraProvider>
    </>
  );
}

export default App;
