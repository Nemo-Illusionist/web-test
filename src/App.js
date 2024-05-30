import './styles/App.css'
import Posts from "./pages/Posts";
import TNavbar from "./components/UI/navbar/TNavbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <TNavbar/>
            <Routes>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    );
}

export default App;
