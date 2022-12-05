<template>
  <div id="view-page">
    <GlobalNavigationBar />

    <main>
      <content>
        <h1>{{ title }}</h1>
        <img src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="image" />
      </content>

      <a id="author" href="#">
        <div
          class="avatar"
          :style="`background-image: url(${avatarImage});`"
        ></div>

        <div class="user">
          <span class="username">{{ username }}</span>
          <span class="email">{{ email }}</span>
        </div>

        <span class="bio">
          {{ bio }}
        </span>
      </a>
    </main>
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
      title: 'The Paint',
      avatarImage: 'https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_1280.jpg',
      username: 'Username',
      email: 'example@email',
      bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    }
  }
})
</script>

<style scoped>
  main {
    width: 100%;
    padding: 0 10px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main > * {
    width: 100%;
    max-width: 1200px;
  }

  content {
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  content * {
    max-width: 100%;
    transition: all 500ms ease;
  }

  content h1 {
    margin-bottom: 50px;
  }

  content > img {
    border-radius: 20px;
  }

  content > img:hover {
    border-radius: 0;
  }

  #author {
    min-height: 120px;
    padding: 20px 0;
    border-radius: 20px;
    color: black;
    text-decoration: blink;
    background-color: #F1F3F6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
  }

  #author:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }

  #author > * {
    margin-right: 20px;
  }

  #author .avatar {
    width: 100px;
    height: 100px;
    border: 2px solid lightgray;
    border-radius: 50%;
    background-size: cover;
  }

  #author .user {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  #author .username {
    font-size: 20px;
    color: black;
  }

  #author .email {
    font-size: 18px;
    color: gray;
  }

  #author .bio {
    flex: 1;
    font-size: 16px;
  }

  
</style>