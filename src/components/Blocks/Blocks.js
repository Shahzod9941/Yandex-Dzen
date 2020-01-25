import React from 'react'
import  '../../Style.css'

export default function Block(props){
    return (
        <div class="line">
            <img src={props.imgUrl} title={props.title} />
            <h3>{props.price} ₽</h3>
            <p className="col">{props.name}</p>
        </div>
    )
}