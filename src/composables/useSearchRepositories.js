import { ref, computed } from 'vue'

export default function usePostSearch(posts) {
    const s = ref('');
    const searchQuery = computed(() => {
        return posts.value.filter(
            post => post.title.includes(s.value)
        )
    });

    return {
        s,
        searchQuery
    }
}