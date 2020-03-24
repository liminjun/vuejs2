<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['quotes']
    }
</script>
<style>
    .panel-body{
        font-family: 'Arial';
        font-size: 24px;
        color: #ee6633;
    }
    .quote{
        background-color: #ffe2e2;
    }
</style>