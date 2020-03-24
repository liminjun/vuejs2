<template>
    <div class="container">
        
    </div>
</template>

<script>
    import User from './components/User.vue';

    export default {
        data: function(){
            return {
                quotes: ['Just q Quote to see somthing.'],
                maxQuotes: 10
            }
        },
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
