import React from 'react'
import { Outlet } from 'react-router'
import Banner from './components/Banner'

export default function Home() {
  return (
    <div>
        <Outlet/>
        <Banner/>
    </div>
  )
}
