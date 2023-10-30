import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import HostLayout from "./pages/host/HostLayout";
import About from "./pages/About";
import Vans from "./pages/van/Vans";
import Cars from "./pages/cars/Cars";
import VanDetails from "./pages/van/VanDetails";
import Rent from "./pages/Rent";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminVan from "./pages/admin/AdminVan";
import AdminCar from "./pages/admin/AdminCar";
import AdminVanDetails from "./pages/admin/AdminVanDetails";
import AddVehicle from "./pages/admin/AddVehicle";
import DashBoard from "./pages/host/DashBoard";
import Income from "./pages/host/Income";
import { Reviews } from "@mui/icons-material";
import HostVans from "./pages/host/HostVans";
import HostVanDetails from "./pages/host/HostVanDetails";
import VanInfo from "./pages/host/VanInfo";
import VanPhotos from "./pages/host/VanPhotos";
import VanPricing from "./pages/host/VanPricing";
import PageNotFount from "./componets/PageNotFount";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Reviews />} />
            <Route path="vans"  element={<HostVans />} />
            <Route path={"vans/:id"} element={<HostVanDetails />} >
              <Route index element={<VanInfo/>}/>
              <Route path="pricing" element={<VanPricing/>}/>
              <Route path="photos" element={<VanPhotos/>}/>
            </Route>
          </Route>

          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="cars" element={<Cars />} />
          <Route path="rent" element={<Rent />} />


          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminVan />} />
            <Route path="cars" element={<AdminCar />} />
            <Route path="addVehicle" element={<AddVehicle />} />
            <Route path="vans/:id" element={<AdminVanDetails />} />

          </Route>
          <Route path="*" element={<PageNotFount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
