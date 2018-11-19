import React = require("react");
import ReactDOM = require("react-dom");
import { Provider } from "react-redux";
import App from "./components/app.component";
import { store } from "./store";

import "./index.scss";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app-root"),
);
