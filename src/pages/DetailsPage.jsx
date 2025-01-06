import React from 'react'
import { useParams } from 'react-router'

export default function DetailsPage() {
    const {name} = useParams()
    console.log(name)
  return (
    <div>
        
    </div>
  )
}
