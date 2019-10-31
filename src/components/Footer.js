import React from 'react'
import './Footer.css'
import Demarche from "./img/demarche-ecologique.png"


class Footer extends React.Component {

    handleEvent = (event) => {
        alert("salut!")
    }

    render() {
        return (
            <div className="footer">
                <div className="contenu">
                    <span className="copyrigth">@2019 LE MAUVAIS COIN</span>
                    <span className="mentionLégale" onClick={this.handleEvent}>-Mentions Illégales-</span>
                </div>
                <a className="lienEco" href="https://www.generation-net.org/fr/demarche-ecologique.html"><img src={Demarche} alt="démarche écologique"></img></a>
            </div>
        )
    }
}

export default Footer