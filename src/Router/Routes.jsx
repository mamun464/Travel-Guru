import { createBrowserRouter } from "react-router-dom";
import Root from "../Componentes/Root";
import Home from "../Componentes/Home/Home";
import Booking from "../Componentes/Booking/Booking";


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

        ]
    }
])

export default Routes;