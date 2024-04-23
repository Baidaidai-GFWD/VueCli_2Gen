<template>
    <div id="about_right_path">
        <!--AboutBanner切入点-->
        <AboutBanner/>
        <h1>Hey,this is right side</h1>
        <!--BackButton切入点---->
        <BackButton/>
    </div>
</template>
<script>
    import AboutBanner from '../AboutBanner_Component/AboutBanner.vue'  //引入了AboutBanner
    import BackButton from '../BackButton/BackButton.vue'
    export default {
        name: 'RightSide',  //没有任何作用，仅是为了后期可能的方便调用
        components: {
            AboutBanner,  //引入AboutBanner组件
            BackButton  //引入了BackButton组件
        }
    }
</script>
