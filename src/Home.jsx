import React from 'react'
import FetchedPokemon from './components/FetchedPokemon'
import { useTitle } from './hooks/useTitle'
import Banner from './components/Banner'


export default function Home() {
    useTitle("Home")
  return (
    <div className='space-y-10'>
        <Banner/>
       <FetchedPokemon/>
    </div>
  )
}
