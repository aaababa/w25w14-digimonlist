import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getSongDetail } from '../api/digimonApi.js'

const DigimonDetail = () => {
  const { id } = useParams()
  const { data: digimon, isLoading, isError, error } = useQuery({
    queryKey: ['digimon', id],
    queryFn: () => getDigimonDetail(id),
    enabled: !!id,
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full">
        {digimon.name}
        <div className="flex justify-center mb-6">
          <img 
            src={`https://picsum.photos/192/192?random=${digimon.id}`} 
            alt={`${digimon.name} 디지몬 이미지`}
            className="w-32 h-32 object-cover rounded-2xl shadow-xl border-4 border-indigo-100 transform hover:scale-105 transition duration-300"
          />
        </div>

        <div className="text-center mb-8 border-b pb-4 border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1 leading-tight">
            {digimon.generation}
          </h1>
          <p className="text-xl font-medium text-indigo-600 mb-3">
            {digimon.attribute}
          </p>       
        </div>

        <div className="mb-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-600 whitespace-pre-wrap leading-relaxed italic">
                {digimon.type}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            리스트
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default DigimonDetail