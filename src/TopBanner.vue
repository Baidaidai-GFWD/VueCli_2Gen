<template>
  <div id="app">
    <!--固定不动的导航栏区域-->
    <nav>
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
    </nav>
    <!--写在views里的可变vue文件-->
    <router-view>
    </router-view>
  </div>
</template>

<!--Style未添加scoped，会渗透到子组件去-->
<style scoped>  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
