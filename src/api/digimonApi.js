import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/digimons',
})

export const getDigimonList = async () => {
  const res = await api.get(``)
  return res.data
}

export const getDigimonDetail = async (id) => {
  const res = await api.get(`/${id}`)
  return res.data
}