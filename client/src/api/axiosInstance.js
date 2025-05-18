import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://cybermind-works-l4t9.vercel.app/'
})

export default axiosInstance 