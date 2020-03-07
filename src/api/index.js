import axios from 'axios'
var baseUrl = process.env.VUE_APP_BASE_API
console.log('baseUrl', baseUrl);

// if (process.env.NODE_ENV === 'development') {
//     baseUrl = '/a'
// } else if (process.env.NODE_ENV === 'test') {
//     baseUrl = 'test'
// } else if (process.env.NODE_ENV === 'production') {
//     baseUrl = 'http://localhost:3000'
// }
axios.defaults.baseURL = baseUrl
// axios.defaults.baseURL = '/a'
// axios.defaults.baseURL = 'http://localhost:3000'
export const homeget = () => {
    return axios.get('/user')
}