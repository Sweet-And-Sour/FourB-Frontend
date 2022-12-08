<template>
  <div id="intro-page" ref="page">
    <section
      v-for="item in sections"
      :id="item.title"
      :key="item.title"
      ref="sections"
    ></section>

    <main>
      <header>
        <span class="logo">4b</span>
        <a class="btn btn-outline-success" type="button" href="/home">Go to Home</a>
      </header>

      <div class="center-nav">
        <span class="prefix-text">We are</span>
        <div ref="group" class="group">
          <span
            v-for="(item, index) in sections"
            :key="item.title"
            ref="items"
            @click="scrollTo(index)"
          >
            {{ item.title }}
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

export default defineComponent({
  setup() {
      return {};
  },
  data () {
    return {
      current: 0,
      sections: [
        {
          title: 'developer',
          selector: '#developer',
          backgroundImage: 'https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80'
        },
        {
          title: 'artist',
          selector: '#artist',
          backgroundImage: 'https://images.unsplash.com/photo-1564715474258-a24341637496?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
        },
        {
          title: 'communicators',
          selector: '#communicators',
          backgroundImage: 'https://images.unsplash.com/photo-1513538416877-f11f5fb85d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80'
        },
        {
          title: 'connected',
          selector: '#connected',
          backgroundImage: 'https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
        },
        {
          title: 'researchers',
          selector: '#researchers',
          backgroundImage: 'https://images.unsplash.com/photo-1531265726475-52ad60219627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2382&q=80'
        }
      ]
    }
  },
  mounted () {
    this.setSectionBackground();
    this.setIndex(0);
    this.scrollTo(0);

    (this.$refs.page as any).addEventListener('scroll', () => this.scrollEvent());
  },
  unmounted () {
    (this.$refs.page as any).removeEventListener('scroll', () => this.scrollEvent());
  },
  methods: {
    setIndex(index: number) {
      if (index < 0 || index >= this.sections.length) return;

      const items: any = this.$refs.items;
      const group: any = this.$refs.group;

      items[this.current].classList.remove('active');
      items[index].classList.add('active');

      this.current = index;

      const margin = -index * 41;
      group.style.cssText = `margin-top: ${margin}px;`;
    },
    scrollTo (index: number) {
      if (index < 0 || index >= this.sections.length) return;

      const section: any = document.querySelector(this.sections[index].selector);
      const position = section.offsetTop;

      this.setIndex(index);
      (this.$refs.page as any).scrollTo(0, position);
    },
    scrollEvent() {
      const scrollY = (this.$refs.page as any).scrollTop;
      const sections = document.getElementsByTagName('section');

      let index = 0;
      let best = Number.MAX_SAFE_INTEGER;
      
      for (let i = 0; i < sections.length; i++) {
        const diff = Math.abs(scrollY - sections[i].offsetTop);

        if (diff < best) {
          index = i;
          best = diff;
        }
      }

      this.setIndex(index);
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
    height: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    position: absolute;
    top: 0;
    left: 0;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    scroll-behavior: smooth;
  }

  #intro-page::-webkit-scrollbar {
    display: none;
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
    pointer-events: none;
  }

  header {
    width: 100%;
    position: fixed;
    top: 15px;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    pointer-events: all;
  }

  header > * {
    margin: 0 20px;
  }

  .logo {
    font-family: 'Fondamento', cursive;
    font-weight: bold;
    font-style: italic;
    font-size: 40px;
    color: white;
  }

  .center-nav {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    align-items: flex-start;
    justify-content: center;
    pointer-events: all;
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

  .center-nav .group > span {
    margin-bottom: 10px;
    color: gray;
    font-size: 20px;
    text-decoration: blink;
    transition: all 500ms ease-in-out;
    cursor: pointer;
  }

  .center-nav .group > span:hover {
    color: coral;
  }

  .center-nav .group .active {
    border-right: 5px solid coral;
  }

  .center-nav .group .active {
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
    scroll-snap-align: start;
  }
</style>