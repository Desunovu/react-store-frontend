import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from "./utility/apolloClient";
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/authContext";
import {DevSupport} from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <BrowserRouter>
        <React.StrictMode>
          <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
          >
            <App />
          </DevSupport>
        </React.StrictMode>
      </BrowserRouter>
    </AuthProvider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
