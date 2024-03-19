import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Catalogues from "./pages/Catalogues";
import Lifestyle from "./pages/Lifestyle";
import Favourite from "./pages/Favourite";
import Fashionpage from "./pages/Fashionpage";
import Signuppage from "./pages/Signuppage";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <scrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zakaz" element={<Catalogues />} />
          <Route path="/fashionpage" element={<Fashionpage />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/Signuppage" element={<Signuppage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
