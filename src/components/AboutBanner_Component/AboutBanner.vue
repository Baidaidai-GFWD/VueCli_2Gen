<template>
    <div id="AboutBanner">
        <nav>
            <!--路由导航-->
            <router-link to="/about/left" class="layui-btn layui-btn-radius">Go left</router-link>
            <span> | </span>
            <router-link to="/about/right" class="layui-btn layui-btn-radius">Go Right</router-link>
        </nav>
    </div>
</template>
<script>
    //导出AboutBanner供其它组件使用
    export default {
        name: 'AboutBanner',
        //自定义函数
        methods:{
            //this are some methods
        }
    }
</script>