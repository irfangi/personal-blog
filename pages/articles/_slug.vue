<template>
<!-- <pre> {{ article }} </pre> -->


    <nuxt-content :document="article"/>
</template>
<script>
export default {
    async asyncData({$content, params}){
        const article = await $content('articles', params.slug).fetch()
        return {article}
    }
}
</script>

<style lang="scss">
    .nuxt-content{
        h1{
            /* background: #000; */
            @apply font-bold text-2xl mt-3 text-gray-700;
        }
    }
</style>