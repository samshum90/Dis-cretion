const baseURL = 'http://35.192.137.226:8080/'

export default {
  get() {
    return fetch(baseURL + "database/query/all")
      .then(res => res.json())
  },

  getById(id) {
    return fetch(baseURL + "database/query/" + id)
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
  addAssistent(payload) {
    return fetch(baseURL + 'flexible_work', {
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
  saveReply(payload) {
    return fetch('http://35.192.137.226:8080/flexible_work/update', {
      method: 'POST',
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