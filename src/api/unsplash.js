import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID sgtXkX0jNOyUC5QIqc7TWH7yfsLata1txF7bXQLIKCU',
  },
})
