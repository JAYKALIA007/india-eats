import  ReactDOM  from "react-dom/client";
import {  createBrowserRouter , RouterProvider } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from "./components/About";
import Error from "./components/Error";
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
        <Body />
        <Footer />
    </>
)

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <Error />
    },
    {
        path : '/about',
        element : <About />
    }
])

const heading = <h1>Hello World!</h1>
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)