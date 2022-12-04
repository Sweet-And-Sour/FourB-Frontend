<template>
  <div class="slider">
    <button class="btn left" @click="moveLeft">
      <i class="bi bi-chevron-left"></i>
    </button>

    <content>
      <div ref="wrap" class="wrap">
        <slot></slot>
      </div>
    </content>

    <button class="btn right" @click="moveRight">
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

  .slider .btn.left {
    font-size: 30px;
    z-index: 2;
  }

  .slider .btn.right {
    font-size: 30px;
    z-index: 2;
  }
</style>
