import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "shared/config/i18n/i18n";
// const root = document.getElementById('root')

const container = document.getElementById("root");
ReactDOM.createRoot(container).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
