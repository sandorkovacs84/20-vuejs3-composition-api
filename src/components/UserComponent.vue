<template>
    <div>
        <h1>User Component</h1>

        <counter-component></counter-component>

        <input type="number" v-model="a">

        <!-- {{ users }} -->
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'
// import { fetchUsers } from '@/api/UserRepositories'
import { ref, onMounted, watch } from 'vue'

import CounterComponent from '@/components/CounterComponent';

export default {
    components: {
        CounterComponent,
    },

    setup() {
        const a = ref(1);

        const users = ref([]); 

        const getUserRepositories = async () => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users') ;
            // let res = await fetchUsers();
            users.value = res.data 
        }

        onMounted(getUserRepositories);

        watch(a, getUserRepositories);

        return {
            a,
            users,
            getUserRepositories
        }
    },

 

}
</script>
