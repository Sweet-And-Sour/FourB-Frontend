<template>
  <div id="profile-page">
    <GlobalNavigationBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  data () {
    return {
      profile: {
        backgroundImage: '',
        avatarImage: '',
        username: '',
        introdunction: '',
        field: '',
        contact: {
          email: '',
          website: '',
        },
      },
      teams: [
        {
          thumbnailImage: '',
          title: '',
          teamName: '',
          link: '',
        },
        {
          thumbnailImage: '',
          title: '',
          teamName: '',
          link: '',
        },
      ],
      worksCategory: [
        {
          icon: '',
          name: '',
        }
      ],
      works: [
        {
          id: 0,
          thumbnailImage: '',
          title: '',
          author: '',
          description: '',
          link: '',
        },
      ],
      likes: [
        {
          id: 0,
          thumbnailImage: '',
          title: '',
          author: '',
          description: '',
          link: '',
        },
      ],
    }
  }
})
</script>

<style scoped>

</style>
