<template>
        <h1>User Component</h1>


        <h3 class="text-lg">Post</h3>

        <input v-model="post.title">
        <textarea v-model="post.body"></textarea>
        <button @click="addPost">Add Post</button>
        <hr>

        <input type="text" v-model="s">

        <!-- {{ searchQuery }} -->

        <!-- {{ users }} -->
        <ul>
            <li v-for="post in searchQuery" :key="post.id">
                {{ post.title }} - 
                <button @click="deletePost(post.id)">[delete]</button>
            </li>
        </ul>
</template>

<script>

// import axios from 'axios'
// import { PostRepository } from '@/api/PostRepositories'
import { ref } from 'vue'
import usePostRepositories from '@/composables/usePostRepositories'
import useSearchRepositories from '@/composables/useSearchRepositories'

export default {
    components: {
    },

    setup() {
        const post = ref({});
        // posts repositories 
        const { 
            posts,
            addPost,
            deletePost
        } = usePostRepositories(post)

        const {
            s,
            searchQuery
        } = useSearchRepositories(posts)

        return {
            addPost,
            deletePost,
            s,
            searchQuery,
            // a,
            posts,
            post,
            // getPostRepositories
        }
    },

 

}
</script>
