import { PostRepository } from '@/api/PostRepositories'
import { ref, onMounted} from 'vue'

export default function usePostRepositories(post) {
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

    const deletePost = async (id) => {
        let res = await PostRepository.delete(id)
        console.log(res)
        // posts.value.splice(id, 1)
        posts.value = posts.value.filter(post => post.id != id)
    }

    onMounted(getPostRepositories);
    // watch(a, getPostRepositories);

    return {
        getPostRepositories,
        posts,
        addPost,
        deletePost
    }

}