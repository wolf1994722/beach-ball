// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

import "./styles/style.css";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./interface/Loading";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);
