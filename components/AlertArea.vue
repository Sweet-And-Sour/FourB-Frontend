<template>
  <div ref="alertArea" class="alert-area" :class="{scroll: isScroll}">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    maxLength: {
      type: Number,
      default: 100,
    },
    isScroll: {
      type: Boolean,
      default: true,
    }
  },
  setup () {
    return {}
  },
  data () {
    return {
    }
  },
  methods: {
    addHeadingAlert() {
      // TODO: 기능 추가 예정
    },
    addAlert(message: string, color: string, icon: string | undefined = undefined) {
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('alert', `alert-${color}`, 'alert-dismissible', 'd-flex', 'align-items-center');
      alertDiv.setAttribute('role', 'alert');

      let html = '';
      
      if (icon !== undefined) {
        html += `<i class="bi ${icon}"></i>`;
      }

      html += `<div>${message}</div>`;
      html += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

      alertDiv.innerHTML = html;

      const alertArea = this.$refs.alertArea as HTMLElement;

      if (alertArea.childElementCount >= this.$props.maxLength) {
        alertArea.removeChild(alertArea.lastChild!);
      }

      alertArea.prepend(alertDiv);
    }
  }
})
</script>

<style>
  @keyframes alert-show {
    from { opacity: 0; transform: translateY(100px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .alert-area {
    width: 100%;
    height: 100%;
  }

  .alert-area.scroll {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .alert {
    animation: alert-show 500ms forwards;
  }

  .alert i {
    margin-right: 10px;
  }
</style>
