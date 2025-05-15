import ReactDOM from "react-dom/client";
import AppRoutes from "./router/appRoutes.tsx"
import NavbarComponent from './components/navbar.tsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavbarComponent />
    <AppRoutes />
  </React.StrictMode>

);
