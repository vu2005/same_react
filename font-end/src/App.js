import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import "./styles/App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
