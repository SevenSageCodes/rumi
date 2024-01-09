import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/screens/home/home";
import AboutUs from "./components/screens/aboutus/aboutUs";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>\
      <Route path="/aboutus" Component={AboutUs}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
