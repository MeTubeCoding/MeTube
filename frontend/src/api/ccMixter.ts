import axios from 'axios'

const CCMIXTER_API_BASE_URL = 'http://ccmixter.org/api/query'

export const fetchTracks = async () => {
  try {
    const response = await axios.get(
      `${CCMIXTER_API_BASE_URL}?t=info&f=json&limit=10&sort=rank&tags=remix`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching tracks:', error)
    return []
  }
}