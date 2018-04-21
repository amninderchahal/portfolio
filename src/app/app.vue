<template>
<div>
  <SideBar/>
  <div id="main" class="main">
    <transition name="animate">
      <router-view/>
    </transition>
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