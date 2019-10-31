import React from 'react';
import './Buttons.css'
import Taches from './Taches'

class Buttons extends React.Component{
    state = {
        active : false
    }

   handleClick = (event) => {
    this.setState({active : !this.state.active})
   }

    render (){

        return(
            <div>
        <div id="goaaal">
            <button className="but" onClick={this.handleClick}>Start</button>
        </div>
        {this.state.active? <div><h2 className="titre">Quel service souhaitez-vous à l'adresse: {this.props.text} ?</h2><Taches/></div> : console.log('lol')}
        </div>
        )
    }
}

export {Buttons as default};