<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutBanner />
  </div>
</template>
<script>
  import AboutBanner from '../components/AboutBanner_Component/AboutBanner.vue'
  export default{
    components: {
      AboutBanner
    },
    name: 'AboutView',
  }
</script>
