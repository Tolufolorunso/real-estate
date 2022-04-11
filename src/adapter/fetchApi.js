import axios from "axios";

 const fetchApi = axios.create({
    baseURL: '/api/v1',
  })


 authFetch.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      return Promise.reject(error)
    }
  )

  export default fetchApi