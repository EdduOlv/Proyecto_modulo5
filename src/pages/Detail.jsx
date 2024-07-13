import React from 'react'
import { useLocation } from 'react-router-dom'

export const Detail = () => {
  const { state } = useLocation();
 
  return (
    <div>
      <h2>hola mundo</h2>
    </div>
  )
}
