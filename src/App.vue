<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Media_Screens from './assets/Media.css'
import NavBar from './components/NavBar.vue';
import HomeView from "./views/HomeView.vue";
</script>
<template>
<NavBar/>
<RouterView/>
</template>
<script>
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
}
</style>