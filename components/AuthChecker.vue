<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted () {
    this.refreshToken();
    setInterval(() => this.refreshToken(), 30000);
  },
  methods: {
    refreshToken () {
      if (this.$accessor.accessToken != null && this.$accessor.accessToken !== '') {
        this.$accessor.refreshToken();
      }
    }
  },
})
</script>
