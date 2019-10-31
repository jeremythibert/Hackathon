import React from 'react'
import './Taches.css'
import axios from 'axios'

class Taches extends React.Component{
    state = {
        cards: false,
        killers: []
    }

    handleChange = (event) => {
        
        console.log(event.target.value);
        
        this.setState({cards : true})
        axios.get(`http://localhost:4001/task/${event.target.name}`)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            
            this.setState({killers : data})
        })
    }
    render(){
        console.log(this.state);
        
        return(
            <div className="tableau">
                <div className="one"><input className="button" type="button" name="" value="chercher-vos-enfants" onClick={this.handleChange}></input></div>
                <div className="two"><input className="button" type="button" name="" value="tuer vos ennemis" onClick={this.handleChange}></input></div>
                <div className="three"><input className="button" type="button" name="" value="faire votre ménage" onClick={this.handleChange}></input></div>
                <div className="four"><input className="button" type="button" name="" value="kidnapper des gens" onClick={this.handleChange}></input></div>
                <div className="five"><input className="button" type="button" name="" value="faire vos courses" onClick={this.handleChange}></input></div>
                <div className="six"><input className="button" type="button" name="" value="garder vos enfants" onClick={this.handleChange}></input></div>
                <div className="seven"><input className="button" type="button" name="" value="harceler quelqu'un" onClick={this.handleChange}></input></div>
                <div className="eigth"><input className="button" type="button" name="sortirlechien" value="sortir le chien" onClick={this.handleChange}></input></div>
                <div className="nine"><input className="button" type="button" name="" value="coiffure" onClick={this.handleChange}></input></div>
                <div className="ten"><input className="button" type="button" name="" value="torturer vos proches" onClick={this.handleChange}></input></div>
            </div>
        )
    }
}

export default Taches