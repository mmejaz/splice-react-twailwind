import { Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard/Index";
import User from "../modules/user/Index";
import IncomingPackages from "../modules/incomingPackages/Index";
function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Dashboard />}></Route>
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
