<template>
    <div>
        <h3>添加目标</h3>
        <div class="progress">
            <div class="progress">
                <div class="progress-bar"
                :style="{width:(quoteCount/maxQuotes)*100+'%'}">
                    {{quoteCount}} / {{maxQuotes}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['quoteCount','maxQuotes']
}
</script>