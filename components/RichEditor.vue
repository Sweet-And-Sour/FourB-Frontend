<template>
  <div class="rich-editor">
    <div ref="richEditor"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HighlightJS from 'highlight.js'
import * as Quill from 'quill';

export default defineComponent({
  props: {
  },
  setup () {
    return {}
  },
  data () {
    return {
      editor: {},
      options: {
        bounds: '#full-container .editor',
        modules: {
          'syntax': {
            highlight: (text: string) => HighlightJS.highlightAuto(text).value,
          },
          'toolbar': [
            [{ 'font': ['serif', 'sans-serif', 'monospace'] }, { 'size': [] }],
            [ 'bold', 'italic', 'underline', 'strike' ],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'super' }, { 'script': 'sub' }],
            [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
            [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
            [ {'direction': 'rtl'}, { 'align': [] }],
            [ 'link', 'image', 'video', 'formula' ],
            [ 'clean' ]
          ],
        },
        theme: 'snow'
      }
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: '/css/quill.core.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/quill.bubble.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/quill.snow.css'
      }
    ],
  },
  mounted () {
    const richEditor = this.$refs.richEditor as HTMLElement;
    this.editor = new (Quill as any)(richEditor, this.options);
  }
})
</script>

<style scoped>
  .rich-editor {
    width: 100%;
    height: 100%;
  }
</style>
