<template>
  <nav-bar-component/>
  <side-bar-component/>
  <router-view/>
</template>

<script lang="ts">
import NavBarComponent from './components/NavBarComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'

export default {
  components: {
    NavBarComponent,
    SideBarComponent
  }
}
</script>

<style>
</style>
