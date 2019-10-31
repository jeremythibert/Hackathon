import React from 'react'
import './Taches.css'

class Taches extends React.Component{
    render(){
        return(
            <div className="tableau">
                <div className="one"><input className="button" type="button" value="chercher vos enfants"></input></div>
                <div className="two"><input className="button" type="button" value="tuer vos ennemis"></input></div>
                <div className="three"><input className="button" type="button" value="faire votre ménage"></input></div>
                <div className="four"><input className="button" type="button" value="kidnapper des gens"></input></div>
                <div className="five"><input className="button" type="button" value="faire vos courses"></input></div>
                <div className="six"><input className="button" type="button" value="garder vos enfants"></input></div>
                <div className="seven"><input className="button" type="button" value="harceler quelqu'un"></input></div>
                <div className="eigth"><input className="button" type="button" value="sortir le chien"></input></div>
                <div className="nine"><input className="button" type="button" value="coiffure"></input></div>
                <div className="ten"><input className="button" type="button" value="torturer vos proches"></input></div>
            </div>
        )
    }
}

export default Taches