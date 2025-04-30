import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/styles/index.css"
import App from '../src/app/App.tsx'
import {SelectedUnitProvider} from "./context/SelectedUnitContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <SelectedUnitProvider>
        <App />
      </SelectedUnitProvider>
  </StrictMode>,
)
