<template>
    <div id="about_left_path">
        <AboutBanner />
        <h1>Hey,this is left side</h1>
        <router-link to="/about">Go Back</router-link>
        
    </div>
</template>
<script>
    import AboutBanner from '../AboutBanner_Component/AboutBanner.vue'
    export default {
        name: 'LeftSide',   //没有任何作用，仅是为了后期可能的方便调用
        components: {
            AboutBanner
        }
    }
</script>
