import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import HostLayout from "./pages/host/HostLayout";
import About from "./pages/About";
import Vans,{loader as vansLoader } from "./pages/van/Vans";
import Cars from "./pages/cars/Cars";
import VanDetails ,{loader as vanDetailsLoader} from "./pages/van/VanDetails";
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
import Login from "./pages/Login";
import MyError from "./componets/MyError";


const router= createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<Layout />} errorElement={<MyError/>}>
          <Route index element={<Home />} />


          <Route path="about" element={<About />} />
          <Route 
          path="vans" 
          element={<Vans />} 
          loader={vansLoader}
          />
          <Route 
          path="vans/:id" 
          element={<VanDetails />} 
          loader={vanDetailsLoader}
          />
          <Route path="cars" element={<Cars />} />
          <Route path="rent" element={<Rent />} />
          <Route path="login" element={<Login />} />


          <Route path="host" element={<HostLayout />}>
                               
            <Route
              index
              element={<DashBoard />}
             loader={async ()=>{
              return null
             }}
              />

            <Route
              path="income"
              element={<Income />}
             loader={async ()=>{
              return null
             }}
              />
            <Route
              path="review"
              element={<Reviews />}
              loader={async ()=>{
                return null
              }}
              />

            <Route
              path="vans"
              element={<HostVans />} 
             loader={async ()=>{
              return null
             }}
              />

            <Route
              path={"vans/:id"}
              element={<HostVanDetails />} 
              loader={async ()=>{
                return null
              }}
              >

              <Route
                index
                element={<VanInfo />}
              loader={async ()=>{
                return null
              }} 
                />

              <Route
                path="pricing"
                element={<VanPricing />}
              loader={async ()=>{
                return null
              }}  
                />

              <Route
                path="photos"
                element={<VanPhotos />}
              loader={async ()=>{
                return null
              }}
                />

            </Route>

          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminVan />} />
            <Route path="cars" element={<AdminCar />} />
            <Route path="addVehicle" element={<AddVehicle />} />
            <Route path="vans/:id" element={<AdminVanDetails />} />
          </Route>

          <Route path="*" element={<PageNotFount />} />
        </Route>

))


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
