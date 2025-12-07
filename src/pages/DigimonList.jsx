import { Link } from 'react-router-dom'
import SongCard from '../components/DigimonCard.jsx'

export default function DigimonList({ digimons }) {
  return (
    <>
      {digimons.map(digimon => (
        <DigimonCard key={digimon.id} digimon={digimon} />
      ))}
    </>
  )
}