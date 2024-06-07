import { Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard/Index";
import User from "../modules/user/Index";
import Profile from "../modules/profile/Index";
import Shipping from "../modules/shipping/Index";
import Warehouse from "../modules/warehouse/Index";
import IncomingPackages from "../modules/incomingPackages/Index";
function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Dashboard />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/shipping" element={<Shipping />}></Route>
                <Route path="/warehouse" element={<Warehouse />}></Route>
                <Route path="/home" element={<User />}></Route>
                <Route
                    path="/incomingPackages"
                    element={<IncomingPackages />}
                ></Route>
            </Routes>
        </>
    );
}

export default AppRoutes;
