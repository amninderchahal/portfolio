<template>
<div>
  <SideBar/>
  <div class="main">
      <router-view/>
  </div>
</div>
</template>

<script>
import SideBar from './components/sidebar.vue';

export default {
  name: 'App',
  components: {
    SideBar
  },
  created(){
    this.$store.dispatch('getStateData')
  }
}
</script>

<style>
</style>