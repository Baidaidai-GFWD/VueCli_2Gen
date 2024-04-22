<template>
    <div id="about_right_path">
        <AboutBanner/>
        <h1>Hey,this is right side</h1>
        <router-link to="/about">Go Back</router-link>
    </div>
</template>
<script>
    import AboutBanner from '../AboutBanner_Component/AboutBanner.vue'
    export default {
        name: 'RightSide',  //没有任何作用，仅是为了后期可能的方便调用
        components: {
            AboutBanner
        }
    }
</script>
