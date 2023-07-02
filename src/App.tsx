import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShopingCarContext";

function App() {
  return (
    <ShoppingCartProvider>
      <main>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
