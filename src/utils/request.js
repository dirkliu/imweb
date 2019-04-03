import axios from 'axios'

export default function (method, url, data) {
  return axios({
    method,
    url,
    data
  })
}
