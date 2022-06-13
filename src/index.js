import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
	CssBaseline,
	ThemeProvider,
	createTheme,
	StyledEngineProvider,
} from "@mui/material";

const theme = createTheme();

ReactDOM.render(
	<BrowserRouter>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</StyledEngineProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
