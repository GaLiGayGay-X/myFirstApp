import request from '../utils/request';

export function query() {
  return request('http://localhost:3000/posts',
    {
      method: 'get'
    });
}

export function add(params) {
  return request('http://localhost:3000/posts',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)

    })
}

export function edit(params) {
  return request('http://localhost:3000/posts/' + params.id,
    {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)

    })
}

export function remove(id) {
  return request('http://localhost:3000/posts/' + id,
    {
      method: 'delete'
    })
}
