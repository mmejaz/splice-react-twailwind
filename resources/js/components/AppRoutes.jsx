import { Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard/Index";
import User from "../modules/user/Index";
function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Dashboard />}></Route>
                <Route path="/home" element={<User />}></Route>
            </Routes>
        </>
    );
}

export default AppRoutes;
