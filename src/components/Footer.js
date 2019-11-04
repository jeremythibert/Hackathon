import React from 'react'
import Popup from 'reactjs-popup'
import './Footer.css'
import Demarche from "./img/demarche-ecologique.png"


class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="contenu">
                    <span className="copyrigth">@2019 LE MAUVAIS COIN</span>
                    <Popup trigger={<span className="illegal">- Mentions Illégales -</span>} modal>
                    {close => (
            <div className="modal">
            <a className="close" onClick={close}>
                &times;
            </a>
            <div className="header"> Mentions Illégales </div>
            <div className="content">
                {" "}
                Tout achat de service sur notre plateforme est totalement non garantis. Le planning de nos prestataires est complètement aléatoire.
                <br />
                Nous ne garantissons pas non plus un travail soigneux, cela dépend de la sensibilité de nos intervenant et il se peut qu'il y ai confusion des tâches (tuer les courses, kidnapper le ménage...).
            </div>
            </div>
    )}
  </Popup>
);   
                    
                </div>
                <a className="lienEco" href="https://www.generation-net.org/fr/demarche-ecologique.html"><img src={Demarche} alt="démarche écologique"></img></a>
            </div>
        )
    }
}

export default Footer