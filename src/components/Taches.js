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
                <div className="one"><input className="button" type="button" name="cherchervosenfants" value="chercher vos enfants" onClick={this.handleChange}></input></div>
                <div className="two"><input className="button" type="button" name="tuervosennemis" value="tuer vos ennemis" onClick={this.handleChange}></input></div>
                <div className="three"><input className="button" type="button" name="fairevotremenage" value="faire votre ménage" onClick={this.handleChange}></input></div>
                <div className="four"><input className="button" type="button" name="kidnapperdesgens" value="kidnapper des gens" onClick={this.handleChange}></input></div>
                <div className="five"><input className="button" type="button" name="fairevoscourses" value="faire vos courses" onClick={this.handleChange}></input></div>
                <div className="six"><input className="button" type="button" name="gardervosenfants" value="garder vos enfants" onClick={this.handleChange}></input></div>
                <div className="seven"><input className="button" type="button" name="harcelerquelquun" value="harceler quelqu'un" onClick={this.handleChange}></input></div>
                <div className="eigth"><input className="button" type="button" name="sortirlechien" value="sortir le chien" onClick={this.handleChange}></input></div>
                <div className="nine"><input className="button" type="button" name="coiffure" value="coiffure" onClick={this.handleChange}></input></div>
                <div className="ten"><input className="button" type="button" name="torturervosproches" value="torturer vos proches" onClick={this.handleChange}></input></div>
            </div>
        )
    }

// const KillerList = () => (
        // <div>
    //         {killer.map(killerItem =>(
    //             <Killer image={killerItem.image} name={killerItem.name} rating={killerItem.rating} description={killerItem.description} quote={killerItem.quote} price={killerItem.price}/>
    //         ))}
    //     </div>
    // )
}

export default Taches