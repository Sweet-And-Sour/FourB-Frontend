<template>
  <div id="edit-page">
    <GlobalNavigationBar />

    <section id="title-input">
      <h2>Title</h2>
      <div class="mb-3">
        <div id="title-input-help" class="form-text mb-1">타이틀을 입력하세요.</div>
        <input id="title-input" type="email" class="form-control" aria-describedby="title-input-help" placeholder="Content title">
      </div>
    </section>

    <section id="content-edit">
      <h2>Editor</h2>
      <div class="form-text mb-1">창의적인 컨텐츠를 공유해 보세요!</div>

      <RichEditor />
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
                <input class="form-control" type="search" placeholder="Categories" aria-label="Search">
              </div>

              <ul class="list-group">
                <a
                  v-for="item in categories"
                  :key="item.title"
                  class="list-group-item"
                  :class="{ active: (item.title == selectedCategory) }"
                  href="javascript:"
                  >
                  {{ item.title }}
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
                <input class="form-control" type="search" placeholder="Tags" aria-label="Search">
                <button class="btn btn-outline-primary" type="button">Add Tag</button>
              </div>

              <h4 class="tags">
                <span v-for="item in tags" :key="item" class="badge rounded-pill text-bg-secondary mx-1">
                  {{ item }}
                </span>
              </h4>
            </div>
          </div>
        </div>

        <div id="upload-files" class="accordion-item">
          <h2 id="headingThree" class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="bi bi-archive me-2"></i>
              Upload Your Files
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionMeta">
            <div class="accordion-body">
              <div class="mb-3">
                <button class="btn btn-outline-primary" type="button">Upload New File</button>
                <button class="btn btn-outline-danger" type="button">Delete All Files</button>
              </div>

              <div class="input-group my-3">
                <span class="input-group-text">Filter</span>
                <input class="form-control" type="search" placeholder="File Name" aria-label="Filter">
              </div>

              <div class="list-group">
                <li v-for="item, index in files" :key="index" href="#" class="list-group-item">
                  <a href="javascript:">{{ item.fileName }}</a>
                  
                  <div class="float-end">
                    <button><i class="bi bi-gear text-primary"></i></button>
                    <button><i class="bi bi-x-lg text-danger"></i></button>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 id="headingFour" class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="bi bi-image me-2"></i>
              Select Thumbnail
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionMeta">
            <div class="accordion-body">
              <p>아직 썸네일이 선택되지 않았습니다.</p>
              <p><b>첨부된 파일 중에서 썸네일을 하나 선택해 주세요.</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="control">
      <div class="d-grid">
        <div class="row gap-2 mx-1">
          <button class="col btn btn-secondary" type="button">Show Preview</button>
          <button class="col btn btn-primary" type="button">Save Content</button>
        </div>
      </div>
    </section>
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
      selectedCategory: 'Music',
      categories: [
        {
          thumbnailImage: 'https://images.unsplash.com/photo-1657103607361-59df798233ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3042&q=80',
          title: 'Music',
          contentCount: '11345',
          link: '#',
        },
        {
          thumbnailImage: 'https://images.unsplash.com/photo-1669073189025-ce695eff6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
          title: 'Video',
          contentCount: '8112',
          link: '#',
        },
        {
          thumbnailImage: 'https://images.unsplash.com/photo-1669436024664-dd5df8cbffe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
          title: 'Architecture',
          contentCount: '21364',
          link: '#',
        },
        {
          thumbnailImage: 'https://images.unsplash.com/photo-1669900505298-618fdc4378a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          title: 'Picture',
          contentCount: '810364',
          link: '#',
        },
        {
          thumbnailImage: 'https://images.unsplash.com/photo-1655389884880-a2b418a82849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          title: 'Design',
          contentCount: '39845',
          link: '#',
        },
        {
          thumbnailImage: 'https://images.unsplash.com/photo-1670199469592-936e6431c870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80',
          title: 'Extra',
          contentCount: '387348',
          link: '#',
        },
      ],
      tags: [ 'test', 'hello', 'world' ],
      files: [
        {
          fileName: 'File Name',
          size: 0,
          mime: 'text/plane'
        },
        {
          fileName: 'File Name',
          size: 0,
          mime: 'text/plane'
        },
        {
          fileName: 'File Name',
          size: 0,
          mime: 'text/plane'
        }
      ],
    }
  }
})
</script>

<style scoped>
#edit-page > section {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    margin-left: 5px;
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
</style>
