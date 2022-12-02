<template>
  <div id="intro-page">
    <section
      v-for="item in sections"
      :id="item.title"
      :key="item.title"
      ref="sections"
    ></section>

    <main>
      <header>
        <GlobalNavigationBar />
      </header>

      <div class="center-nav">
        <span class="prefix-text">We are</span>
        <div ref="group" class="group">
          <span
            v-for="(item, index) in sections"
            :key="item.title"
            ref="items"
            @click="setIndex(index)"
          >
            <a :href="item.link">{{ item.title }}</a>
          </span>
        </div>
      </div>

      <span id="scroll-down-text">
        SCROLL DOWN
        <i class="bi bi-arrow-down"></i>
      </span>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalNavigationBar from '~/components/GlobalNavigationBar.vue';

export default defineComponent({
  components: { GlobalNavigationBar },
  setup() {
      return {};
  },
  data () {
    return {
      currentActivatedIndex: 0,
      sections: [
        {
          title: 'developer',
          link: '#developer',
          backgroundImage: 'https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80'
        },
        {
          title: 'artist',
          link: '#artist',
          backgroundImage: 'https://images.unsplash.com/photo-1564715474258-a24341637496?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
        },
        {
          title: 'communicators',
          link: '#communicators',
          backgroundImage: 'https://images.unsplash.com/photo-1513538416877-f11f5fb85d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80'
        },
        {
          title: 'connected',
          link: '#connected',
          backgroundImage: 'https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
        },
        {
          title: 'researchers',
          link: '#researchers',
          backgroundImage: 'https://images.unsplash.com/photo-1531265726475-52ad60219627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2382&q=80'
        }
      ]
    }
  },
  mounted () {
    this.setIndex(0);
    this.setSectionBackground();
  },
  methods: {
    setIndex (index: number) {
      const items: any = this.$refs.items;

      items[this.currentActivatedIndex].classList.remove('active');
      items[index].classList.add('active');

      this.currentActivatedIndex = index;

      const margin = -index * 41;
      this.$refs.group.style.cssText = `margin-top: ${margin}px;`;
    },
    setSectionBackground() {
      const sections: any = this.$refs.sections;
      
      sections.forEach((el: any, index: number) => {
        el.style = `background-image: url(${this.sections[index].backgroundImage})`;
      });
    }
  }
})
</script>

<style scoped>
  #intro-page {
    width: 100%;
  }

  main {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .center-nav {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    align-items: flex-start;
    justify-content: center;
  }

  .center-nav .prefix-text {
    color: white;
    font-size: 26px;
    margin-right: 20px;
    padding-top: 5px;
  }

  .center-nav .group {
    width: 300px;
    display: flex;
    flex-direction: column;
    transition: all 500ms ease-in-out;
  }

  .center-nav .group span {
    margin-bottom: 10px;
  }

  .center-nav .group a {
    color: gray;
    font-size: 20px;
    text-decoration: blink;
    transition: all 500ms ease-in-out;
  }

  .center-nav .group a:hover {
    color: coral;
  }

  .center-nav .group .active {
    border-right: 5px solid coral;
  }

  .center-nav .group .active a {
    color: coral;
    font-size: 35px;
  }

  #scroll-down-text {
    color: white;
    font-size: 20px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    right: 20px;
    bottom: 30px;
  }

  section {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    position: relative;
    background-size: cover;
  }
</style>