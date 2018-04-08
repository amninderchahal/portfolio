<template>
<div>
  <SideBar/>
  <div class="main">
    <router-view/>
  </div>
</div>
</template>

<script>

import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>
</style>
