import { Link } from 'react-router-dom'

export default function DigimonCard({ digimon }) {
  return (
    <Link to={`/digimon/${digimon.id}`} >
      <img 
        src={`https://picsum.photos/100/100?random=${digimon.id}`} 
        alt={`${digimon.name} 디지몬 이미지`}
      />
      <div>{digimon.name}</div>
    </Link>
  )
}