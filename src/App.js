
import { ChakraProvider } from '@chakra-ui/react';
import './style.css';
import Suggestion from './pages/Suggestions/Suggestions';
import NewFeedBack from './pages/NewFeedBack/NewFeedBack';
import EditFeedBack from './pages/EditFeedBack/EditFeedBack';
import Roadmap from './pages/Roadmap/Roadmap';
import FeedBackDetails from './pages/FeedBackDetail/FeedBackDetail';

function App() {
  return (
    <>
    <ChakraProvider>
      
      
      
      
      <FeedBackDetails/>
    </ChakraProvider>
    </>
  );
}

export default App;
