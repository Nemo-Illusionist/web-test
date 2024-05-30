import './styles/App.css'
import TNavbar from "./components/UI/navbar/TNavbar";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <Router>
            <TNavbar/>
            <AppRouter/>
        </Router>
    );
}

export default App;
