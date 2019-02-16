import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import "./style.css";
import API from "./utils/API.js";

class App extends Component {
    state = {
        bookList: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    
    render() {
        return (
            <Router>
                
      
            </Router>
        )
    }
}

export default App;
