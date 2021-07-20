<template>
    <div>
        <h1 class="font-bold">Main Component</h1>

        <user-component></user-component>
    </div>
</template>

<script>

import UserComponent from './UserComponent'

export default {
    components: {
        UserComponent
    },
    
    setup() {
        
    },
    
}
</script>
