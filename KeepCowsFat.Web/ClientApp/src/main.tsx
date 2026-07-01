import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
		<App />
	</BrowserRouter>
);
