<template>
        <h1>User Component</h1>


        <h3 class="text-lg">Post</h3>
        <input v-model="post.title">
        <textarea v-model="post.body"></textarea>
        <button @click="addPost">Add Post</button>
        <hr>

        <counter-component></counter-component>

        <input type="number" v-model="a">
        <input type="text" v-model="s">

        <!-- {{ searchQuery }} -->

        <!-- {{ users }} -->
        <ul>
            <li v-for="post in searchQuery" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
</template>

<script>

// import axios from 'axios'
import { PostRepository } from '@/api/PostRepositories'
import { ref, onMounted, watch, computed } from 'vue'

// import CounterComponent from '@/components/CounterComponent';

export default {
    components: {
        // CounterComponent,
    },

    setup() {
        const a = ref(1);
        const post = ref({});


        const posts = ref([]); 
   
        const getPostRepositories = async () => {
            // let res = fetchUsers() ;
            let res = await PostRepository.fetchAll();
            console.log(res);
            posts.value = res.data 
        }

        const addPost = async () => {
            let res = await PostRepository.add(post.value)
            console.log(res);
            posts.value.push(res.data)
        }
        // const getUserRepositories = async () => {
        //     let res = await axios.get('https://jsonplaceholder.typicode.com/users') ;
        //     // let res = await fetchUsers();
        //     users.value = res.data 
        // }

        const s = ref('');
        const searchQuery = computed(() => {
            return posts.value.filter(
                repository => repository.title.includes(s.value)
            )
        });
        

        onMounted(getPostRepositories);

        watch(a, getPostRepositories);

        return {
            addPost,
            s,
            searchQuery,
            a,
            posts,
            post,
            getPostRepositories
        }
    },

 

}
</script>
