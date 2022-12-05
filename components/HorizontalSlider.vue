<template>
  <div class="slider">
    <button class="left" @click="moveLeft">
      <i class="bi bi-chevron-left"></i>
    </button>

    <content>
      <div ref="wrap" class="wrap">
        <slot></slot>
      </div>
    </content>

    <button class="right" @click="moveRight">
      <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    itemWidth: {
      type: Number,
      default: 100,
    },
    moveStep: {
      type: Number,
      default: 1,
    },
    itemLength: {
      type: Number,
      default: 100,
    },
  },
  setup () {
    return {}
  },
  data () {
    return {
      position: 0,
    }
  },
  methods: {
    moveLeft (_event: any) {
      if (this.position >= 0) return undefined;
      this.position += this.moveStep * this.itemWidth;

      const wrap = this.$refs.wrap as HTMLElement;
      wrap.style.cssText = `transform: translateX(${this.position}px)`;

      return undefined;
    },
    moveRight (_event: any) {
      if (this.position <= -(this.itemLength - 1) * this.itemWidth) return undefined;
      this.position -= this.moveStep * this.itemWidth;

      const wrap = this.$refs.wrap as HTMLElement;
      wrap.style.cssText = `transform: translateX(${this.position}px)`;

      return undefined;
    }
  }
})
</script>

<style scoped>
  .slider {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .slider content {
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .slider .wrap {
    margin: 40px 0;
    display: inline-flex;
    transition: all 500ms ease;
  }

  .slider > .left,
  .slider > .right {
    height: 100%;
    width: 100px;
    font-size: 30px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    color: transparent;
    position: absolute;
    top: 0;
    z-index: 2;
    transition: all 150ms ease;
  }

  .slider:hover > .left,
  .slider:hover > .right {
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .slider > .left:active,
  .slider > .right:active {
    color: black;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .slider > .left {
    left: 0;
  }

  .slider > .right {
    right: 0;
  }
</style>
