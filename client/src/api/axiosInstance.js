import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://cybermind-works-production.up.railway.app'
    // baseURL : 'http://localhost:5002'
})

export default axiosInstance 