import axios from 'axios'

const UserRepository = {
    fetchUsers: () => axios.get('https://jsonplaceholder.typicode.com/users')
}


export  {
    UserRepository,
}