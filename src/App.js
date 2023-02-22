import { lazy , Suspense } from 'react';
import  ReactDOM  from "react-dom/client";
import {  createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from './components/Shimmer';
// import About from "./components/About";
// import Instamart from './components/Instamart'

const About = lazy(() => import('./components/About'));
const Instamart = lazy(()=>import('./components/Instamart'))


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
                element : (
                    <Suspense fallback={<h4>Loading...</h4>} >
                        <About />
                    </Suspense>
                )
            },
            {
                path:'/contact',
                element : <Contact />
            },
            {
                path: '/restaurant/:id',
                element : <RestaurantMenu />
            },
            {
                path: '/instamart',
                element : (<Suspense fallback={<Shimmer/>} >
                                <Instamart />
                            </Suspense>)
            }
        ]
    }
])

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)