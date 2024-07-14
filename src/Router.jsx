import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Genero } from "./pages/Genero";
import { Layout } from "./components/Layout";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[

            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/Genero",
                element: <Genero/>
            },
            {
                path:"/Detail/:id",
                element: <Detail/>
            }

        ]
    }
   
])