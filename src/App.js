
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import Suggestion from './pages/Suggestions/Suggestions';
import NewFeedBack from './pages/NewFeedBack/NewFeedBack';
import EditFeedBack from './pages/EditFeedBack/EditFeedBack';
import Roadmap from './pages/Roadmap/Roadmap';

function App() {
  return (
    <>
    <ChakraProvider>
      
      
      
      <Roadmap/>
    </ChakraProvider>
    </>
  );
}

export default App;
