import { Routes, Route } from 'react-router-dom'
//import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import DigimonList from './pages/DigimonList.jsx'
import DigimonDetail from './pages/DigimonDetail.jsx'
import { getDigimonList } from './api/digimonApi'


function App() {
  const { data: digimons, isLoading, isError, error } = useQuery({
    queryKey: ['digimons'],
    queryFn: getDigimonList
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<DigimonList digimons={digimons} />} />
      <Route path="/digimon/:id" element={<DigimonDetail digimons={digimons} />} />
    </Routes>
  )
}

export default App
