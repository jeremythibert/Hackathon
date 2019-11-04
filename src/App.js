import React from 'react';
import './App.css';
import AutoCompleteText from './components/AutoCompleteText';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="fond">
          <Header />
          <div className="bandeau">
          <AutoCompleteText/>
          
          </div>
          <Footer/>
          </div>
      </div>
    )
  }
}

export default App;
