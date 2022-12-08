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
  setup () {
    return {}
  },
  data () {
    return {
    }
  },
  mounted () {
    this.authCheck();
  },
  methods: {
    authCheck ()  {
      const token = Cookies.get('accessToken');

      if (token === undefined) {
        this.$emit('update:isSign', false);
        return;
      }

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
        });

      setTimeout(() => this.authCheck(), 1000 * 30);
    }
  },
})
</script>

<style scoped>

</style>