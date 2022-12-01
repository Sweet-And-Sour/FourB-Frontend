<template>
  <div>
    <span class="logo"><i><NuxtLink to="/Home">4b</NuxtLink></i></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped>
  .logo {
    font-family: 'Fondamento', cursive;
    font-weight: bold;
    font-size: 25px;
  }

  .logo a {
    color: black;
    text-decoration: blink;
  }
</style>