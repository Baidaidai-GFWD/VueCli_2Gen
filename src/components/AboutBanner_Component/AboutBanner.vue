<template>
    <div id="AboutBanner">
        <nav>
            <router-link to="/about/left">Go Left</router-link>
            <span> | </span>
            <router-link to="/about/right">Go Right</router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'AboutBanner',
    }
</script>