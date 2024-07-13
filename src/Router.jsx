import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";


export const Router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/Detail/:id",
        element: <Detail/>
    }
])