import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, ThemeProvider , NoteProvider, ArchiveProvider , FilterProvider} from "./frontend/context";
import { BrowserRouter } from 'react-router-dom'


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <NoteProvider>
            <ArchiveProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </ArchiveProvider>
          </NoteProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
