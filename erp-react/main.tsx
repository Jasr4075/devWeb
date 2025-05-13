// Suggested code may be subject to a license. Learn more: ~LicenseLog:2804731288.
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
