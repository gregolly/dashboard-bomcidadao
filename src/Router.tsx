import { Route, Routes } from "react-router-dom";
import { ChangePassword } from "./pages/ChangePassword";
import { Home } from "./pages/Home";
import { Login } from './pages/Login';
import { Occurrence } from "./pages/Occurrence";
import { InnerOcurrence } from "./pages/Occurrence/TableOccurrences/InnerOcurrence";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/changePassword" element={<ChangePassword />}></Route>
            <Route path="/ocorrencias" element={<Occurrence />}></Route>
            <Route path="/internas" element={<InnerOcurrence />}></Route>
        </Routes>
    )
}