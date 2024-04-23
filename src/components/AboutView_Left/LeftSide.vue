<template>
    <div id="about_left_path">
        <!--AboutBanner切入点-->
        <AboutBanner/>
            <h1 class="layui-col-md1">Hey,this is left side</h1>
        <!--BackButton切入点---->
        <BackButton/>
    </div>
</template>
<script>
    import AboutBanner from '../AboutBanner_Component/AboutBanner.vue'  //引入了AboutBanner
    import BackButton from '../BackButton/BackButton.vue'
    export default {
        name: 'LeftSide',   //没有任何作用，仅是为了后期可能的方便调用
        components: {
            AboutBanner,  //引入AboutBanner组件
            BackButton  //引入了BackButton组件
        }
    }
</script>
<style scoped>
    h1{
        height:100%;
    }
</style>
