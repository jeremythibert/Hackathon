import React from 'react';
import './App.css';
import Header from './components/Header'

import Footer from './components/Footer'
import AutoCompleteText from './components/AutoCompleteText';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="fond">
          <Header />
            <AutoCompleteText></AutoCompleteText>
          <Footer></Footer></div>
      </div>
    )
  }
}

export default App;
