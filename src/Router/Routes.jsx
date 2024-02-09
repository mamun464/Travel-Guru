import { createBrowserRouter } from "react-router-dom";
import Root from "../Componentes/Root";
import Home from "../Componentes/Home/Home";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },

        ]
    }
])

export default Routes;