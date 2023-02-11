import  ReactDOM  from "react-dom/client";
import {  createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
/**
 * App Layout
 * 
 * - Header
 *      - Logo
 *      - Navbar(list items)
 *      - Cart
 * - Body
 *      - Search Bar
 *      - Restaurant List
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - Rating
 *          - Cuisines
 * - Footer
 *      - Reference Links
 *      - Copyrights
 * 
 */

const AppLayout = () =>(
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
)

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <Error />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path:'/about',
                element : <About />
            },
            {
                path:'/contact',
                element : <Contact />
            },
            {
                path: '/restaurant/:id',
                element : <RestaurantMenu />
            }
        ]
    }
])

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)