<template>
    <div>
        <h1>User Component</h1>
        <!-- {{ users }} -->
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>

// import axios from 'axios'
import { fetchUsers } from '@/api/UserRepositories'
import { ref } from 'vue'

export default {
    data() {
        return {
            // users: [{'name': 'Sandor', id: 777}]
        }
    },

    setup() {
        const users = ref([]); 

        const getUserRepositories = async () => {
            // users.value = await axios.get('https://jsonplaceholder.typicode.com/users') ;
            users.value = await fetchUsers() ;
        }

        return {
            users,
            getUserRepositories
        }
    },

    mounted() {
        this.getUserRepositories();
    },

    methods: {
        // fetchUsers() {
        //     axios.get('https://jsonplaceholder.typicode.com/users').then( response => {
        //         this.users = response.data;
        //     });
        // }
    }
 

}
</script>
