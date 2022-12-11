import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Main from "../Components/Banner/Main/Main";
import ContactForm from "../Components/ContactForm/ContactForm";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/Projects/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <ContactForm></ContactForm>
            },
            {
                path: '/projectDetails/:id',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router;