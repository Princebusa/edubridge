import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header.jsx";  
import Footer from "./footer.jsx";  
import Home from "./pages/home.jsx"

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
