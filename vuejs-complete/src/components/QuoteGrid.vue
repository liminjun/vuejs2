<template>
    <div class="row">
        <app-quote v-bind:key="quote" v-for="(quote,index) in quotes" @click.native="deleteQuote(index)">{{quote}}</app-quote>
    </div>
</template>
<script>
import Quote from './Quote';
export default {
    props:['quotes'],
    methods: {
        deleteQuote(index){
            this.$emit('quoteDeleted',index);
        }
    },
    components:{
        appQuote:Quote
    }
}
</script>
<style scoped>

</style>