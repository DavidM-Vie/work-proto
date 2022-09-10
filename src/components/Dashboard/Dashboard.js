import React from 'react'
import DayDisplay from '../Displays/DayDisplay/DayDisplay'
import DisplayMode from '../Displays/DisplayMode/DisplayMode'
import Header from '../Header/Header'
import StatsBar from '../StatsBar/StatsBar';

const Dashboard = () => {

  return (
    <>
      <Header />
      <div className="gradient-bar"></div>
      <StatsBar />
      <DisplayMode />
      <DayDisplay />
    </>

  )
}

export default Dashboard