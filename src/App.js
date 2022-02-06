import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingList from './pages/ShoppingList';
import Navbar from './components/Navbar';





function App() {


    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />

                    <Route path="/shopping" exact element={<ShoppingList />} />
                </Routes>
            </Router>
        </div>
    );
};



export default App;
