<template>
  <div id="edit-page">
    <GlobalNavigationBar />

    <section id="title-input">
      <div id="clear-btn">
        <button class="btn btn-outline-danger" type="button" @click="clearAll">Clear All</button>
      </div>

      <h2>Title</h2>
      <div class="mb-3">
        <div id="title-input-help" class="form-text mb-1">타이틀을 입력하세요.</div>
        <input
          id="title-input"
          v-model="title"
          type="text"
          class="form-control"
          aria-describedby="title-input-help"
          placeholder="Content title"
          required
        >
      </div>
    </section>

    <section id="content-edit">
      <h2>Editor</h2>
      <div class="form-text mb-1">창의적인 컨텐츠를 공유해 보세요!</div>

      <RichEditor ref="richEditor" :contents.sync="contents" @fileChanged="fileChangeEvent" />
    </section>

    <section id="meta-edit">
      <h2>Meta</h2>
      <div class="form-text mb-1">메타 데이터를 입력하세요.</div>

      <div id="accordionMeta" class="accordion">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="bi bi-list-check me-2"></i>
              Select Category
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMeta">
            <div class="accordion-body">
              <div class="input-group my-3">
                <span class="input-group-text">Find Categories</span>
                <input
                  v-model="categoryFilterInput"
                  class="form-control"
                  type="search"
                  placeholder="Categories"
                  aria-label="Search"
                  @keyup="categoryFilter"
                >
              </div>

              <ul class="list-group">
                <a
                  v-for="item in categories"
                  :key="item.name"
                  class="list-group-item"
                  :class="{ active: (item.name == selectedCategory) }"
                  href="javascript:"
                  @click="selectCategory(item.name)"
                  >
                  {{ item.name }}
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 id="headingTwo" class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="bi bi-tags me-2"></i>
              Add Tags
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionMeta">
            <div class="accordion-body">
              <div class="input-group my-3">
                <input ref="tagInput" v-model="tagInput" class="form-control" type="search" placeholder="Tags" aria-label="Search" @keyup.enter="addTag" />
                <button class="btn btn-outline-primary" type="button" @click="addTag">Add Tag</button>
              </div>

              <h4 :key="tagsKey" class="tags">
                <span v-for="item in tags" :key="item" class="badge text-bg-light mx-1">
                  {{ item }}
                  <button @click="removeTag(item)"><i class="bi bi-x"></i></button>
                </span>
              </h4>
            </div>
          </div>
        </div>

        <!-- <div id="upload-files" class="accordion-item">
          <h2 id="headingThree" class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="bi bi-archive me-2"></i>
              Upload Your Files
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionMeta">
            <div class="accordion-body">
              <div class="mb-3">
                <button class="btn btn-outline-primary" type="button" @click="uploadNewFile">Upload New File</button>
                <button class="btn btn-outline-danger" type="button">Delete All Files</button>
              </div>

              <div class="input-group my-3">
                <span class="input-group-text">Filter</span>
                <input
                  v-model="fileFilterInput"
                  class="form-control"
                  type="search"
                  placeholder="File Name"
                  aria-label="Filter"
                  @keyup="fileFilter"
                >
              </div>

              <div class="list-group">
                <li v-for="item in files" :key="item.url" href="#" class="list-group-item">
                  <a href="javascript:">{{ item.filename }}</a>
                  
                  <div class="float-end">
                    <button><i class="bi bi-gear text-primary"></i></button>
                    <button><i class="bi bi-x-lg text-danger"></i></button>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div> -->

        <div class="accordion-item">
          <h2 id="headingFour" class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="bi bi-image me-2"></i>
              Select Thumbnail
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionMeta">
            <div class="accordion-body">
              <div>
                <button class="btn btn-outline-primary mb-3" type="button" @click="uploadThumbnail">Upload Thumbnail Image</button>
              </div>

              <div v-if="thumbnail === ''" class="no-thumbnail-message">
                <p>썸네일 이미지가 없습니다.</p>
                <p><b>썸네일을 추가해 보세요!</b></p>
              </div>

              <div v-else class="thumbnail-image">
                <img :src="thumbnail" alt="thumbnail image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="control">
      <div class="d-grid">
        <div class="row gap-2 mx-1">
          <button class="col btn btn-secondary" type="button">Show Preview</button>
          <button class="col btn btn-primary" type="button" @click="saveContents">Save Content</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  data () {
    return {
      tagsKey: 0,
      tagInput: '',
      files: [
        {
          filename: '',
          mine: '',
          url: '',
          size: 0,
        }
      ],
      fileFilterInput: '',
      categoryFilterInput: '',
      selectedCategory: '',
      categories: [
        {
          name: ''
        }
      ],
      thumbnail: '',
    }
  },
  computed: {
    title: {
      get (): string {
        return this.$accessor.EditModule.title;
      },
      set (newValue: string) {
        this.$accessor.EditModule.setTitle(newValue);
      }
    },
    contents: {
      get (): string {
        return this.$accessor.EditModule.contents;
      },
      set (newValue: string) {
        this.$accessor.EditModule.setContents(newValue);
      }
    },
    tags: {
      get (): Array<string> {
        return this.$accessor.EditModule.tags;
      },
      set () {}
    },
  },
  async mounted () {
    this.categories = await this.$accessor.getCategories();
    this.selectedCategory = this.$accessor.EditModule.category;
    this.files = this.$accessor.EditModule.files;
    this.thumbnail = this.$accessor.EditModule.thumbnail;
  },
  methods: {
    clearAll (_event: any) {
      if (confirm('작성중인 내용을 모두 삭제하시겠습니까?')) {
        this.$accessor.EditModule.reset();
        location.reload();
      }

      return undefined;
    },
    addTag (_event: any) {
      const newTags = this.tags;

      if (newTags.includes(this.tagInput)) {
        alert('이미 있는 태그는 추가할 수 없습니다');
        return undefined;
      } else if (this.tagInput === '') {
        alert('내용 없는 태그는 추가할 수 없습니다');
        return undefined;
      }

      newTags.push(this.tagInput);
      this.$accessor.EditModule.setTags(newTags);

      this.tagInput = '';
      (this.$refs.tagInput as HTMLElement).focus();

      return undefined;
    },
    removeTag (tag: string) {
      const newTags = this.tags;
      newTags.splice(this.tags.indexOf(tag), 1);
      this.$accessor.EditModule.setTags(newTags);

      this.tagsKey++;
    },
    async categoryFilter (_event: any) {
      const allCategoies = await this.$accessor.getCategories();

      if (this.categoryFilterInput === '') {
        this.categories = allCategoies;
        return undefined;
      }

      const newCategories = [];

      for (const item of allCategoies) {
        if (new RegExp(this.categoryFilterInput + ".*").test(item.name)) {
          newCategories.push(item);
        }
      }

      this.categories = newCategories;

      return undefined;
    },
    selectCategory (category: string) {
      this.selectedCategory = category;
      this.$accessor.EditModule.setCategory(category);
    },
    fileFilter (_evnet: any) {
      const allFiles = this.$accessor.EditModule.files;

      if (this.fileFilterInput === '') {
        this.files = allFiles;
        return undefined;
      }

      const newFiles = [];

      for (const item of allFiles) {
        if (new RegExp(this.fileFilterInput + ".*").test(item.filename)) {
          newFiles.push(item);
        }
      }

      this.files = newFiles;

      return undefined;
    },
    fileChangeEvent (fileData: any) {
      for (const file of this.files) {
        if (file.url === fileData.url) {
          return;
        }
      }

      this.files.push(fileData);
      this.$accessor.EditModule.setFiles(this.files);
    },
    uploadThumbnail() {
      (this.$refs.richEditor as any).uploadFile((fileData: any) => {
        if (fileData !== undefined) {
          this.thumbnail = fileData.url;
          this.$accessor.EditModule.setThumbnail(fileData.url);
        }
      });

      return undefined;
    },
    uploadNewFile (_event: any) {
      (this.$refs.richEditor as any).uploadFile();
    },
    saveContents (_evant: any) {
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$accessor.accessToken}`
        }
      };

      const data = {
        "username": this.$accessor.UserModule.username,
        "title": localStorage.getItem('fourB.EditModule.title'),
        "contents": localStorage.getItem('fourB.EditModule.contents'),
        "category": localStorage.getItem('fourB.EditModule.category'),
        "tags": localStorage.getItem('fourB.EditModule.tags'),
        "thumbnail": localStorage.getItem('fourB.EditModule.thumbnail')
      };

      console.log(data);
      console.log('title', localStorage.getItem('fourB.EditModule.title'));

      if (data.title === '') {
        alert('타이틀은 필수로 입력해야 합니다!');
        return undefined;
      } else if ((this.$refs.richEditor as any).editor.root.innerText.length < 10) {
        alert('컨텐츠 내용은 최소 10자 이상 입력하셔야 합니다!');
        return undefined;
      } else if (data.category === '') {
        alert('카테고리는 필수로 선택해야 합니다!');
        return undefined;
      }

      axios
        .post('/api/content', data, config)
        .then((response) => {
          if (response.data.success) {
            this.$accessor.EditModule.reset();
            window.location.href = response.data.url;

          } else {
            alert('컨텐츠가 서버로 전송되었지만 오류가 발생하여 저장되지 못했습니다. (다시 시도해 주세요)');
          }
        })
        .catch((error) => {
          alert('컨텐츠 저장 중에 알 수 없는 오류가 발생했습니다! (로그인 여부를 확인해 주세요)');
          console.error(error);
        });

      return undefined;
    },
  },
})
</script>

<style scoped>
  #clear-btn {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #edit-page > section {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
  }

  #edit-page > section h2 {
    font-size: 35px;
    color: gray;
  }

  #edit-page > section h3 {
    font-size: 25px;
    color: gray;
  }

  #meta-edit .accordion-collapse {
    padding: 20px;
  }

  #meta-edit .tags .badge {
    padding: 10px 20px;
    margin: 5px 0;
  }

  #meta-edit .tags .badge button {
    background: none;
    border: none;
    color: red;
    padding-left: 3px;
    vertical-align: middle;
  }

  #upload-files .list-group-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: background-color 500ms ease;
  }
  
  #upload-files .list-group-item:hover {
    background-color: lightgray;
  }

  #upload-files .list-group-item a {
    color: black;
    text-decoration: blink;
    font-size: 18px;
  }

  #upload-files .list-group-item .float-end button {
    background: none;
    border: none;
    padding: 5px;
    font-size: 20px;
  }

  #meta-edit .thumbnail-image img {
    max-width: 100%;
  }
</style>
