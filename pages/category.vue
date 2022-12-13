<template>
  <div id="category-page">
    <GlobalNavigationBar />

    <div class="background">
      <h2>Category</h2>
    </div>

    <main>
      <content>
        <div v-for="(item, index) in contents" :key="index" class="item">
          <a :href="`/view?id=${item.id}`">
            <div class="thumbnail">
              <div class="thumbnail-image" :style="`background-image: url(${item.thumbnail})`"></div>

              <div class="top">
                <button :data-id="item.id" @click.prevent="likeBtn"><i class="bi bi-heart"></i></button>
                <span>{{ item.like }}</span>
              </div>
            </div>

            <div class="info">
              <span class="title">{{ item.title }}</span>
            </div>
          </a>
        </div>
      </content>

      <div id="more-contents-btn">
        <button class="btn btn-outline-secondary" type="button" @click="getContents">More Contents</button>
      </div>
    </main>
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
      contentPage: 0,
      contents: [
        {
          id: '',
          title: '',
          like: 0,
          thumbnail: '',
        }
      ]
    }
  },
  mounted () {
    const categoryName = this.$route.query.name;
    this.contents = [];

    if (categoryName === undefined) {
      alert('존재하지 않는 카테고리 입니다!');
      history.back();
    } else {
      this.getContents({});
    }
  },
  methods: {
    likeBtn (_event: any) {
      return undefined;
    },
    getContents (_event: any) {
      const categoryName = this.$route.query.name;

      const filter = JSON.stringify({
        category: categoryName,
      });

      axios
        .get(`/api/content/all?page=${this.contentPage}&filter=${filter}`)
        .then((response) => {
          if (response.data.success) {
            const contents = [...this.contents, ...response.data.contents];
            this.contents = contents;
          }
        })
        .catch((error) => {
          alert('컨텐츠 가져오는데 오류가 발생했습니다!');
          console.error(error);
        });

      this.contentPage++;
      return undefined;
    },
  }
})
</script>

<style scoped>
  #category-page .background {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  #category-page .background::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  #category-page .background h2 {
    font-size: 30px;
    color: white;
    z-index: 1;
  }

  main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  main > section {
    margin: 50px 0;
  }

  main > section .title {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  main > section h1 {
    color: gray;
    font-size: 40px;
    margin: 20px 0;
  }

  #category-page main .title {
    margin-bottom: 20px;
  }

  #category-page main content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  #category-page main content * {
    transition: all 500ms ease;
  }

  #category-page main content .item {
    width: 380px;
    min-height: 300px;
    position: relative;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }

  #category-page main content .item a {
    color: black;
    text-decoration: blink;
  }

  #category-page main content .item .thumbnail-image {
    width: 380px;
    height: 300px;
    background-position: center;
    border-radius: 20px;
    object-fit: scale-down;
  }

  #category-page main content .item:hover img {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }

  #category-page main content .item .top {
    width: 100%;
    height: fit-content;
    position: absolute;
    top: 10px;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
  }

  #category-page main content .item:hover .top {
    opacity: 1;
  }

  #category-page main content .item .top > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #category-page main content .item .top button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    color: white;
    border: none;
    background-color: rgba(0, 0, 0, .5);
    margin-left: 10px;
  }

  #category-page main content .item .top span {
    width: fit-content;
    min-width: 80px;
    height: 40px;
    padding: 0 20px;
    text-align: center;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, .5);
    margin-right: 10px;
  }

  #category-page main content .item .title {
    color: gray;
    font-size: 20px;
    padding: 10px;
  }

  #category-page main content .item:hover .title {
    color: black;
  }

  #more-contents-btn {
    width: fit-content;
    margin: 40px auto;
  }
</style>
