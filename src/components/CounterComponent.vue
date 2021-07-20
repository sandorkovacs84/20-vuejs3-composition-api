<template>
    <div>
        <h1>{{ title }} {{ count }}</h1>
        <button @click="up()">+</button>
        <button @click="down()">-</button>

        <p>Users count: {{ users}}</p>
    </div>
</template>



<script>

import axios from 'axios'
import { ref, watch } from 'vue'


export default {
    props: ['title'],

    setup(props) {
        console.log(props)

        let users = ref([]);

        const getUsers = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/users').then(() => {
               users=['dsadas']
            });
        }

        watch(users, getUsers)

        return {
            users,
            getUsers
        }
    },

    mounted() {
        this.getUsers();
    },
    
    data() {
        return {
            count: 0
        }
    },

    methods: {
        up() {
            this.count ++;
        },
        down() {
            this.count --;
        },
        
    }

}
</script>
