import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-react-1187c.firebaseio.com/'
})

export default instance
