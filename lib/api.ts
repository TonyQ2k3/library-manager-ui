import axios from 'axios'

const frontendURL = process.env.NEXT_PUBLIC_FRONTEND_URL;

const instance = axios.create({
  baseURL: `${frontendURL}/api`,
})

instance.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export default instance;