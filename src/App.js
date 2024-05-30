import './styles/App.css'
import About from "./pages/About";
import Posts from "./pages/Posts";
import TNavbar from "./components/UI/navbar/TNavbar";

function App() {
  return (
    <div className="App">
        <TNavbar/>
        <Posts/>
    </div>
  );
}

export default App;
