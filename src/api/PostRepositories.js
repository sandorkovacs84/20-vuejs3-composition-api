import axios from 'axios'

const PostRepository = {
    fetchAll: () => axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'),
    add: (post) => axios.post('https://jsonplaceholder.typicode.com/posts', post),
    update: () => axios.get('https://jsonplaceholder.typicode.com/posts'),
    delete: (id) => axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`),
}


export  {
    PostRepository,
}