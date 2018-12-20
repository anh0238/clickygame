import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageElement from './components/ImageDisplay';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Header />
      <ImageElement />
      <Footer />
      </div>
    );
  }
}

export default App;


