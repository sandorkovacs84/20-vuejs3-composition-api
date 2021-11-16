import axios from 'axios'

const PostRepository = {
    fetchAll: () => axios.get('https://jsonplaceholder.typicode.com/posts'),
    add: () => axios.get('https://jsonplaceholder.typicode.com/posts'),
    update: () => axios.get('https://jsonplaceholder.typicode.com/posts'),
    delete: () => axios.get('https://jsonplaceholder.typicode.com/posts'),
}


export  {
    PostRepository,
}