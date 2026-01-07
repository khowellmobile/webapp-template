import "./App.css";

import { Routes, Route } from "react-router-dom";

import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
    const wrapPage = (PageComponent) => {
        return (
            <DefaultLayout>
                <PageComponent />
            </DefaultLayout>
        );
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/home" element={wrapPage(HomePage)} />
            </Routes>
        </>
    );
}

export default App;
