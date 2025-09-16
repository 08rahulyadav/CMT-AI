import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./components/BlogList";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
         <Route path="/blog" element={<BlogList />} />
        
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
