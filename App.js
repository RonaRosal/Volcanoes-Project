
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";


export default function App() {
    return (
        <div className="container">
            <Header />

            <Home/>
            <Footer/>
        </div>
    )
}