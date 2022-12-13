<template>
  <div id="artworks-page">
    <GlobalNavigationBar />

    <main>
      <section id="category">
        <div class="title">
          <div class="left">
            <h1>Categories</h1>
            <div class="text-muted">
              원하는 카테고리의 작품들을 모아서 보세요!
            </div>
          </div>

          <div class="right">
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#categoryModal">
              Show More
            </button>
          </div>
        </div>

        <content>
          <HorizontalSlider
            :item-width="300"
            :move-step="2"
            :item-length="categories.length"
          >
            <a
              v-for="item in categories"
              :key="item.name"
              class="item"
              :href="`/category?name=${item.name}`"
            >
              <div class="thumbnail-image" :style="`background-image: url(${item.thumbnail});`"></div>
              <div class="info">
                <span class="title">{{ item.name }}</span>
                <span class="content-count">{{ parseInt(item.count).toLocaleString() }}</span>
              </div>
           </a>
          </HorizontalSlider>
        </content>
      </section>

      <section id="artwork">
        <div class="title">
          <div class="left">
            <h1>Portfolio</h1>
            <div class="text-muted">
              다양한 작품들을 감상해 보세요!
            </div>
          </div>

          <div class="right">
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Sort By
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item active" href="#">Recently</a></li>
                <li><a class="dropdown-item" href="#">Trending</a></li>
                <li><a class="dropdown-item" href="#">New</a></li>
                <li><a class="dropdown-item" href="#">Like</a></li>
                <li><a class="dropdown-item" href="#">Random</a></li>
              </ul>
            </div>
          </div>
        </div>

        <content>
          <div v-for="(item, index) in portfolio" :key="index" class="item">
            <a :href="`/view?id=${item.id}`">
              <div class="thumbnail">
                <div class="thumbnail-image" :style="`background-image: url(${item.thumbnail})`"></div>

                <div class="top">
                  <button :data-id="item.id" @click.prevent="artworkLikeBtn"><i class="bi bi-heart"></i></button>
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
      </section>
    </main>

    <!-- Category Modal -->
    <div id="categoryModal" class="modal fade" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 id="categoryModalLabel" class="modal-title fs-5">All Categories</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="d-flex my-3">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </div>

            <ul class="list-group">
              <a v-for="item in categories" :key="item.name" class="list-group-item" :href="item.link">{{ item.name }}</a>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
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
      categories: [
        {
          thumbnail: 'https://images.unsplash.com/photo-1657103607361-59df798233ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3042&q=80',
          name: 'Music',
          count: '11345',
          link: '#',
        },
      ],
      contentPage: 0,
      orderBy: 'created_datetime',
      portfolio: [
        {
          id: 0,
          thumbnail: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
          title: 'Macbook Pro',
          link: '#',
          like: 0,
        },
      ],
    }
  },
  mounted () {
    this.getCategories();

    this.portfolio = [];
    this.getContents({});
  },
  methods: {
    getCategories () {
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      };

      axios
        .get('/api/category', config)
        .then((response) => {
          this.categories = response.data.results || [];
        })
    },
    getContents (_event: any) {
      axios
        .get(`/api/content/all?page=${this.contentPage}&orderBy=${this.orderBy}`)
        .then((response) => {
          if (response.data.success) {
            const portfolio = [...this.portfolio, ...response.data.contents];
            this.portfolio = portfolio;
          }
        })
        .catch((error) => {
          alert('컨텐츠 가져오는데 오류가 발생했습니다!');
          console.error(error);
        });

      this.contentPage++;
      return undefined;
    },
    artworkLikeBtn (_event: any) {
      return undefined;
    }
  }
})
</script>

<style scoped>
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

  #category content .slider {
    margin: 40px 0;
  }

  #category content .item {
    margin: 0 20px;
    color: black;
    text-decoration: blink;
  }

  #category content .item .thumbnail-image:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }

  #category content .item .thumbnail-image {
    width: 300px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
  }

  #category content .item .info {
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  #category content .item .title {
    font-size: 18px;
    font-weight: bold;
  }

  #category content .item .content-count {
    color: gray;
    font-size: 16px;
    font-family: monospace;
  }

  #artwork .title {
    margin-bottom: 20px;
  }

  #artwork content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  #artwork content * {
    transition: all 500ms ease;
  }

  /* #artwork content .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  } */

  #artwork content .item {
    width: 380px;
    min-height: 300px;
    position: relative;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }

  #artwork content .item a {
    color: black;
    text-decoration: blink;
  }

  #artwork content .item .thumbnail-image {
    width: 380px;
    height: 300px;
    background-position: center;
    border-radius: 20px;
    object-fit: scale-down;
  }

  #artwork content .item:hover img {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }

  #artwork content .item .top {
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

  #artwork content .item:hover .top {
    opacity: 1;
  }

  #artwork content .item .top > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #artwork content .item .top button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    color: white;
    border: none;
    background-color: rgba(0, 0, 0, .5);
    margin-left: 10px;
  }

  #artwork content .item .top span {
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

  #artwork content .item .title {
    color: gray;
    font-size: 20px;
    padding: 10px;
  }

  #artwork content .item:hover .title {
    color: black;
  }

  #more-contents-btn {
    width: fit-content;
    margin: 40px auto;
  }

  @media screen and (max-width: 600px) {}

  @media screen and (max-width: 765px) {
    main > section .title {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 10px;
      gap: 15px;
    }

    #artwork content .item,
    #artwork content .item .thumbnail-image,
    #category content .item .thumbnail-image {
      width: 250px;
      height: 200px;
    }
  }
</style>