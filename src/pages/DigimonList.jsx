import { Link } from 'react-router-dom'
import DigimonCard from '../components/DigimonCard.jsx'

export default function DigimonList({ digimons }) {
  return (
    <div className='p-6'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {digimons.map(digimon => (
        <DigimonCard key={digimon.id} digimon={digimon} />
      ))}
      </div>
    </div>
  )
}