import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { Navbar } from "widgets/Navbar";
import {Suspense} from "react";
import "./styles/index.scss";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={ classNames("app", {}, [theme]) }>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
