const baseURL = 'https://dis-cretion.herokuapp.com/api/requests/'

export default {
  get() {
    return fetch(baseURL)
      .then(res => res.json())
  },
  getById(id) {
    return fetch(baseURL + id)
      .then(res => res.json())
  },
  add(payload) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  },
  update(payload) {
    return fetch(baseURL + payload._id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },
  delete(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}