import React from "react";
import ReactDOM from "react-dom/client";
import { Clima_hoy } from "./Clima_hoy";
import { Navegacion } from "./Navegacion";

import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Navegacion />
  <Clima_hoy />
  </>
);