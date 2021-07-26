import React from 'react'
import styles from './Card.module.scss'

const Card = (props) => {

  const {city} = props



  return (
    <div className={styles.card}>
      <h2>{city.location.name}</h2>
      <img src={city.current.condition.icon} alt="" />
      <p>Temperature: {city.current.temp_c} °C</p>
      <p>Humidity: {city.current.humidity}</p>
    </div>
  )
}

export default Card
