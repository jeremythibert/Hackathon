import React, { Component } from 'react'
import './Killers.css'

export default class Killer extends Component {
    render() {
        return (
            <div className="killers">
                <div className='avatar'>
               <img className='killerImage' src={this.props.image} alt={this.props.name}/>
               <p className='rating'>Note : {this.props.rating}/5</p>
               </div>
               <div className='description'>
                   <h3 className='killerName'>{this.props.name}</h3>
                   <p className='killerDescription'>{this.props.description}</p>
                   <p className='killerQuote'>"{this.props.quote}"</p>
               </div>
               <div className='killerPrice'>
                    <p className='price'>Tarif</p>
                    <p className='priceNb'>{this.props.price} $</p>
                </div>
            </div>
        )
    }
}