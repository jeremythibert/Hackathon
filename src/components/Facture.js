import React from 'react';
import './Facture.css';

class Facture extends React.Component {
    render() {
        return (
        <div className="achat">
            <h2>Facture</h2>
            <div>
                <h3 className="facturation">{this.props.prix} $ seront prélevés sur votre compte!</h3>
                <p>Nous vous remercions pour votre achat.<br></br>
                   Nous espérons que la prestation vous fera frémir.<br></br>
                   A bientôt dans nos caveaux !</p>
                <img className="squelette" src="https://media.giphy.com/media/3o6ZthefCIFqbOTQ0E/giphy.gif" alt="squelette"/>
            </div>
        </div>
        )
    }
}







export default Facture