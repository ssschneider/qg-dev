import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import QG from "./pages/qg";
import Time from "./pages/time";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/qg" element={<QG />}/>
        <Route path="/time" element={<Time />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
