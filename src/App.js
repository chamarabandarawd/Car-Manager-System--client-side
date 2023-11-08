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
import DashBoard ,{loader as hostDashBoardLoader} from "./pages/host/DashBoard";
import Income ,{loader as hostIncomeLoader} from "./pages/host/Income";
// import  {Reviews, loader as HostReviewLoader}  from "@mui/icons-material";
import HostVans,{loader as hostVanLoader} from "./pages/host/HostVans";
import HostVanDetails,{loader as hostVanDetails} from "./pages/host/HostVanDetails";
import VanInfo from "./pages/host/VanInfo";
import VanPhotos from "./pages/host/VanPhotos";
import VanPricing from "./pages/host/VanPricing";
import PageNotFount from "./componets/PageNotFount";
import Login , {loader as loginLoader, action as logingAction} from "./pages/Login";
import MyError from "./componets/MyError";
import { requireAuth } from "./utils/utils";
import Reviews from "./pages/host/Reviews";


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
          <Route 
          path="login" 
          element={<Login />} 
          loader={loginLoader}
          action={logingAction}
          />


          <Route path="host" element={<HostLayout />}>
                               
            <Route
              index
              element={<DashBoard />}
              loader={async ()=> await requireAuth()}
              />

            <Route
              path="income"
              element={<Income />}
              loader={async ()=> await requireAuth()}
              />
            <Route
              path="review"
              element={<Reviews />}
              loader={async ()=> await requireAuth()}
              />

            <Route
              path="vans"
              element={<HostVans />} 
             loader={hostVanLoader}
              />

            <Route
              path={"vans/:id"}
              element={<HostVanDetails />} 
              loader={hostVanDetails}
              >

              <Route
                index
                element={<VanInfo />}
                loader={async ()=> await requireAuth()}
                />

              <Route
                path="pricing"
                element={<VanPricing />}
                loader={async ()=> await requireAuth()}
                />

              <Route
                path="photos"
                element={<VanPhotos />}
                loader={async ()=> await requireAuth()}
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
