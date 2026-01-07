import "./App.css";

import { Routes, Route } from "react-router-dom";

import SplashPage from "./pages/SplashPage";
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
                <Route path="/" element={wrapPage(SplashPage)} />
            </Routes>
        </>
    );
}

export default App;
