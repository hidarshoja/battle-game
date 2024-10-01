import React from 'react'
import Header from '../components/Header'
import ChartComponent from '../components/ChartComponent'
import TabsPlay from '../components/TabsPlay'

export default function Home() {
  return (
    <div className='bg-[#000]'>
        <Header />
      <ChartComponent />
     <TabsPlay />
    </div>
  )
}
