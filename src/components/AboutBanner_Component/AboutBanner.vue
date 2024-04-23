<template>
    <div id="AboutBanner">
        <nav>
            <!--路由导航-->
            <router-link to="/about/left">Go Left</router-link>
            <span> | </span>
            <router-link to="/about/right">Go Right</router-link>
        </nav>
    </div>
</template>
<script>
    //导出AboutBanner供其它组件使用
    export default {
        name: 'AboutBanner',
    }
</script>