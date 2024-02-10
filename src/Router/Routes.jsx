import { createBrowserRouter } from "react-router-dom";
import Root from "../Componentes/Root";
import Home from "../Componentes/Home/Home";
import Booking from "../Componentes/Booking/Booking";
import RoomBooking from "../Componentes/Room/RoomBooking";
import Login from "../Componentes/Login/Login";
import Registration from "../Componentes/Registration/Registration";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/booking/:id",
                element: <Booking></Booking>,

            },
            {
                path: "/booking-room/:id",
                element: <RoomBooking></RoomBooking>,

            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Registration></Registration>,

            },

        ]
    }
])

export default Routes;