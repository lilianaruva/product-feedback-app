import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Suggestion from "./pages/Suggestions/Suggestions";
import NewFeedBack from "./pages/NewFeedBack/NewFeedBack";
import EditFeedBack from "./pages/EditFeedBack/EditFeedBack";
import Roadmap from "./pages/Roadmap/Roadmap";
import FeedBackDetails from "./pages/FeedBackDetail/FeedBackDetail";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Suggestion />} />
          <Route path="/add-feedback" element={<NewFeedBack />} />
          <Route path="/edit-feedback" element={<EditFeedBack />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/feedback-detail" element={<FeedBackDetails />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
