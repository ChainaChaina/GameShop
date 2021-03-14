import React from 'react'
import style from '../styles/components/Gamecard.module.css'

export default function GameCard(props) {
    return (
        <div className={style.card}>
            <img src={'../assets/' + props.image} alt="" />
            <h1> {props.name}</h1>
            <h3>Price: ${props.price}</h3>
            <p>Score:{props.score}</p>
            <button className={style.button}>buy</button>
        </div>
    )
}
