import dotenv from 'dotenv';
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import App from "./App";
import "./index.css";
dotenv.config();


ReactDOM.createRoot(document.getElementById("root")!).render(
	<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
				<App />
			</StyleSheetManager>
		</BrowserRouter>
	</Suspense>
);