<template>
  <div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Cookies from 'js-cookie'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isSign: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String,
      default: '',
    }
  },
  mounted () {
    setInterval(() => this.authCheck(), 100);
    setInterval(() => this.refreshToken(), 30000);
  },
  methods: {
    authCheck ()  {
      const token = Cookies.get('accessToken');

      if (this.isSign && token === undefined) {
        this.$emit('update:isSign', false);

      } else if (!this.isSign && token !== undefined) {
        this.$emit('update:isSign', true);

        axios
        .get('/api/sign/payload', {
          headers: {
            accept: '*/*',
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => {
          this.$emit('update:username', response.data.username);
        })
        .catch(() => {
          Cookies.remove('accessToken');
          this.$emit('update:isSign', false);
          this.$emit('update:username', '');
        });
      }
    },
    refreshToken () {
      const token = Cookies.get('accessToken');

      if (token === undefined) {
        return;
      }

      axios
        .get('/api/sign/refresh', {
          headers: {
            accept: '*/*',
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => {
          Cookies.set('accessToken', response.data.access_token);
        })
        .catch(() => {
          Cookies.remove('accessToken');
          this.$emit('update:isSign', false);
          this.$emit('update:username', '');
        });
    }
  },
})
</script>

<style scoped>

</style>