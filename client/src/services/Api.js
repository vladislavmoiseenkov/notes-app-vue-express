import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
    baseURL: 'https://server-6zpz8etzs.now.sh',
    headers: {
      Authorization: `Bearer ${store.state.auth.token}`
    }
  })
}
