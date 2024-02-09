import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/screens/home/home";
import AboutUs from "./components/screens/aboutus/aboutUs";
import Gallery from "./components/screens/gallery/gallery";
import Products from "./components/screens/products/products";
import ContactUs from "./components/screens/contactus/contactUs";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/gallery" Component={Gallery}/>
      <Route path="/products" Component={Products}/>
      <Route path="/aboutus" Component={AboutUs}/>
      <Route path="/contactus" Component={ContactUs}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
