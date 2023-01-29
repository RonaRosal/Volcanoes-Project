import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

//Import .JS files
import VolcanoInfoPage from "./pages/VolcanoInfoPage";
import VolcanoListPage from "./pages/VolcanoListPage"
import RegisterPage from "./pages/RegisterPage"
import LogInPage from "./pages/LogInPage"
import CustomListDropDown from "./components/CustomListDropDown";



const rootElement = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/pages/VolcanoInfoPage" element={<VolcanoInfoPage />} />
                <Route path="/pages/VolcanoListPage" element={<VolcanoListPage />} />
                <Route path="/pages/RegisterPage" element={<RegisterPage />} />
                <Route path="/pages/LogInPage" element={<LogInPage />} />
                <Route path="/components/CustomListDropDown" element={<CustomListDropDown />} />
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
