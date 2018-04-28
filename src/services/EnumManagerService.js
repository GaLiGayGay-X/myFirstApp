import {requesttodo, config} from '../utils';
import request from '../utils/request';


export async function query() {
  return request('http://localhost:3000/tree', {method: 'get'})
}

export async function save(params) {
  return requesttodo('http://localhost:3000/tree',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }
  )
}

export async function edit(params) {
  return requesttodo('http://localhost:3000/tree/' + params.id,
    {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }
  )
}

export async function remove(id) {
  return requesttodo('http://localhost:3000/tree/' + id,
    {
      method: 'delete'
    }
  )
}
