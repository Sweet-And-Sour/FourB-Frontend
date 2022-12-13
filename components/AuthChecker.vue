<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      worker: ({} as any)
    }
  },
  mounted () {
    this.refreshToken();

    if (window.Worker) {
      this.worker = new Worker('/js/authCheckWorker.js');
      this.worker.postMessage(this.$accessor.accessToken);
      
      this.worker.onmessage = (event: any) => {
        this.$accessor.setAccessToken(event.data);
      };

    } else {
      setInterval(() => this.refreshToken(), 30000);
    }
  },
  unmounted () {
    if (this.worker) {
      this.worker.terminate();
    }
  },
  methods: {
    refreshToken () {
      if (this.$accessor.accessToken != null && this.$accessor.accessToken !== '') {
        this.$accessor.refreshToken();
        this.$accessor.UserModule.fetch(this.$accessor.UserModule.username || '');
      }
    }
  },
})
</script>
