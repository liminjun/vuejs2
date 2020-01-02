<template>
    <div class="container">
        <h1>hello world.</h1>
        <app-quote-grid :quotes='quotes'></app-quote-grid>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid';

    export default {
        data: function(){
            return {
                quotes:[],
                maxQuotes:0
            }
        },
        components:{
            appQuoteGrid:QuoteGrid
        }
    }
</script>

<style>

</style>
