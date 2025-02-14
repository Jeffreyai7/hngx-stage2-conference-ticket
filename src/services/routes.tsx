import { createBrowserRouter } from "react-router-dom";
import MultiPartForm from '../pages/MultiPartForm'
import AboutProject from "../pages/AboutProject";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MultiPartForm/>
    },
    {
        path: "/about-project",
        element: <AboutProject/>
    },                      
])