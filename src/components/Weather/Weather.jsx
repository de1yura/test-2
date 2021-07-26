import React from 'react'
import Card from './Card'
import weatherData from '../../data/weatherData'
import styles from './Weather.module.scss'

const Weather = () => {

  const citiesJSX = weatherData.map((city) => {
    return <Card city={city}/>
  })

  return (
    <div>
      {citiesJSX}
    </div>
  )
}

export default Weather
