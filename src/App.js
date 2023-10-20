import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import HostLayout from "./pages/host/HostLayout";
import About from "./pages/About";
import Vans from "./pages/van/Vans";
import Cars from "./pages/cars/Cars";
import VanDetails from "./pages/van/VanDetails";
import Rent from "./pages/Rent";


function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="host" element={<HostLayout/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans/>}/>
        <Route path="vans/:id" element={<VanDetails/>}/>
        <Route path="cars" element={<Cars/>}/>
        <Route path="rent" element={<Rent/>}/>
      </Route>
    </Routes>
</BrowserRouter>

  );
}

export default App;
