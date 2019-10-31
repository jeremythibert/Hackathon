import React from 'react'
import './Taches.css'
import axios from 'axios'

class Taches extends React.Component{
    state = {
        cards: false,
        killers: []
    }

    handleChange = (event) => {
        this.setState({cards : true})
        axios.get(`localhost:4001/task/${event.target.value}`)
        .then(res => res.data)
        .then(data => {
            this.setState({killers : data})
        })
    }
    render(){
        return(
            <div className="tableau">
                <div className="one"><input className="button" type="button" value="chercher vos enfants" onClick={this.handleChange}></input></div>
                <div className="two"><input className="button" type="button" value="tuer vos ennemis" onClick={this.handleChange}></input></div>
                <div className="three"><input className="button" type="button" value="faire votre ménage" onClick={this.handleChange}></input></div>
                <div className="four"><input className="button" type="button" value="kidnapper des gens" onClick={this.handleChange}></input></div>
                <div className="five"><input className="button" type="button" value="faire vos courses" onClick={this.handleChange}></input></div>
                <div className="six"><input className="button" type="button" value="garder vos enfants" onClick={this.handleChange}></input></div>
                <div className="seven"><input className="button" type="button" value="harceler quelqu'un" onClick={this.handleChange}></input></div>
                <div className="eigth"><input className="button" type="button" value="sortir le chien" onClick={this.handleChange}></input></div>
                <div className="nine"><input className="button" type="button" value="coiffure" onClick={this.handleChange}></input></div>
                <div className="ten"><input className="button" type="button" value="torturer vos proches" onClick={this.handleChange}></input></div>
            </div>
        )
    }
}

export default Taches