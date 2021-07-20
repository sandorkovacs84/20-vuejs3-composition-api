<template>
    <div>
        <h1>User Component</h1>

        <counter-component></counter-component>

        <input type="number" v-model="a">
        <input type="text" v-model="s">

        <!-- {{ searchQuery }} -->

        <!-- {{ users }} -->
        <ul>
            <li v-for="user in searchQuery" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'
// import { fetchUsers } from '@/api/UserRepositories'
import { ref, onMounted, watch, computed } from 'vue'

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

        const s = ref('em');
        const searchQuery = computed(() => {
            return users.value.filter(
                repository => repository.name.includes(s.value)
            )
        });
        

        onMounted(getUserRepositories);

        watch(a, getUserRepositories);

        return {
            s,
            searchQuery,
            a,
            users,
            getUserRepositories
        }
    },

 

}
</script>
