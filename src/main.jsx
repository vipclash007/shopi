import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { FirebaseProvider } from "./context/Firebase";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </BrowserRouter>
)
