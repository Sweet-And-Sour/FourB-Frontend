<template>
  <div class="rich-editor">
    <div ref="richEditor"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HighlightJS from 'highlight.js'
import * as Quill from 'quill';
import axios from 'axios';

export default defineComponent({
  props: {
    contents: {
      type: String,
      default: '',
    }
  },
  setup () {
    return {}
  },
  data () {
    return {
      editor: ({} as any),
      options: {
        bounds: '#full-container .editor',
        modules: {
          'syntax': {
            highlight: (text: string) => HighlightJS.highlightAuto(text).value,
          },
          'toolbar': {
            container: [
              [{ 'font': ['serif', 'sans-serif', 'monospace'] }, { 'size': [] }],
              [ 'bold', 'italic', 'underline', 'strike' ],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'script': 'super' }, { 'script': 'sub' }],
              [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
              [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
              [ {'direction': 'rtl'}, { 'align': [] }],
              [ 'link', 'image', 'video', 'formula' ],
              [ 'clean' ],
            ],
            handlers: {
              image: () => console.log('No File Uploader'),
            },
          }
        },
        placeholder: '자유롭게 입력하세요',
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
    this.options.modules.toolbar.handlers.image = () => this.uploadFileThenAppend();

    const richEditor = this.$refs.richEditor as HTMLElement;
    this.editor = new (Quill as any)(richEditor, this.options);
    this.editor.root.innerHTML = this.contents;
    (this.editor as any).on('text-change', (delta: any, oldDelta: any, source: string) => this.textChangeEvent(delta, oldDelta, source));
  },
  methods: {
    getHTML () {
      return this.editor.root.innerHTML;
    },
    textChangeEvent (_delta: any, _oldDelta: any, _source: string) {
      this.$emit("update:contents", this.getHTML());
    },
    uploadFile (callback: Function) {
      const input = document.createElement('input') as HTMLInputElement;
      input.setAttribute('type', 'file');
      input.setAttribute('accept', '*/*');
      input.click();

      input.addEventListener('change', async () => {
        const file = input.files![0];
        const formData = new FormData();
        formData.append("file", file);

        try {
          const accessToken = this.$accessor.accessToken;

          const config = {
            headers: {
              accept: '*/*',
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${accessToken}`,
            }
          };

          const response = await axios.post('/api/file', formData, config);

          if (response.data.success) {
            const fileUrl = response.data.url;

            const fileData = {
              filename: file.name,
              mine: file.type,
              url: fileUrl,
              size: file.size,
            };

            this.$emit('fileChanged', fileData);

            callback(fileData);
          }

        } catch (error) {
          alert('파일 업로드 중 오류가 발생했습니다!');
          console.error(error);
        }
      });
    },
    uploadFileThenAppend() {
      this.uploadFile((fileData: any) => {
        if (fileData !== undefined) {
          this.editor.focus();
          const range = this.editor.getSelection();
          this.editor.insertEmbed(range.index, 'image', fileData.url);
          
          this.$emit("update:contents", this.getHTML());
        }
      });
    }
  },
})
</script>

<style scoped>
  .rich-editor {
    width: 100%;
    height: 100%;
  }
</style>
