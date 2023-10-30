import React from 'react'
import Headsection from './HeadSection'
import ChartSection from './ChartSection'
import BarSection from './BarSection'
import DataGridDemo from './DataGridSection'

const DashboardRoute = () => {
  return (
   <>
    <Headsection/>
    <ChartSection/>
    <BarSection/>
    <DataGridDemo/>
   </>
    
  )
}

export default DashboardRoute