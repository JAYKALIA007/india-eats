import  ReactDOM  from "react-dom/client";
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
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

const AppComponent = () =>(
    <>
        <Header />
        <Body />
        <Footer />
    </>
)
const heading = <h1>Hello World!</h1>
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)