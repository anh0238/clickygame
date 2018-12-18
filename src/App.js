import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageDisplay from "./components/Images";


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Header />
      <ImageDisplay />
      <Footer />
      </div>
    );
  }
}

export default App;


