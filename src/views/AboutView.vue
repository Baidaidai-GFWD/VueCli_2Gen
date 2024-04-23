<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--AboutBanner切入点-->
    <AboutBanner />
  </div>
</template>
<script>
  import AboutBanner from '../components/AboutBanner_Component/AboutBanner.vue'  //引入了AboutBanner
  export default{
    name: 'AboutView',  //没有任何作用，仅是为了后期可能的方便调用
    components: {
      AboutBanner  //引入AboutBanner组件
    }
  }
</script>
