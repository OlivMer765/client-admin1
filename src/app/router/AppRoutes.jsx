import {Route, Routes} from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage";
import { DashboardPage } from "../layouts/DashboardPage";
import { Fields } from "../../features/fields/components/Fields";
import { Reservations } from "../../features/reservations/components/Reservations";
import { Teams } from "../../features/teams/components/Teams";
import { Tournaments } from "../../features/tournaments/components/Tournaments";
import { Users } from "../../features/users/components/Users";

export const AppRoutes = ()=> {

    return (
        <Routes>
            {/* PÚBLICAS*/}
            <Route path="/" element={<AuthPage />}/>

            {/* PROTEGIDO POR ROLE */}
            <Route path="/dashboard" element={<DashboardPage />}>
                <Route path="fields" element={<Fields />} />
                <Route path="reservations" element={<Reservations />} />
                <Route path="teams" element={<Teams />} />
                <Route path="tournaments" element={<Tournaments />} />
                <Route path="users" element={<Users />} />
            </Route>

            {/* Ruta temporal para pruebas */}
            <Route path="*" element={<h1>Página no encontrada</h1>}/>
        </Routes>
    );
}