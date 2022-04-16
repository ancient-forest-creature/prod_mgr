import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home"
import Detail from "./components/Detail"
import Update from "./components/Update"

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/product/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

