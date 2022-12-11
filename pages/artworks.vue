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
              :href="item.link"
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
            <h1>Artworks</h1>
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
          <div v-for="(column, index) in artworks" :key="index" class="column">
            <div
              v-for="item in column"
              :key="item.id"
              class="item"
            >
              <a :href="item.link">
                <div class="thumbnail">
                  <img :src="item.thumbnailImage" alt="thumbnail" />

                  <div class="top">
                    <button :data-id="item.id" @click.prevent="artworkLikeBtn"><i class="bi bi-heart"></i></button>
                    <span>{{ item.viewCount }}</span>
                  </div>
                </div>

                <div class="info">
                  <span class="title">{{ item.title }}</span>
                </div>
              </a>
            </div>
          </div>
        </content>
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
      artworks: [
        [
          {
            id: 0,
            thumbnailImage: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
            title: 'Macbook Pro',
            viewCount: 123,
            link: '#',
          },
          {
            id: 1,
            thumbnailImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            title: 'Working',
            viewCount: 123,
            link: '#',
          },
          {
            id: 2,
            thumbnailImage: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            title: 'Asus Laptop',
            viewCount: 123,
            link: '#',
          },
        ],
        [
          {
            id: 3,
            thumbnailImage: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            title: 'Keyboard',
            viewCount: 123,
            link: '#',
          },
          {
            id: 4,
            thumbnailImage: 'https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            title: 'Windows',
            viewCount: 123,
            link: '#',
          },
          {
            id: 5,
            thumbnailImage: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
            title: 'Google',
            viewCount: 123,
            link: '#',
          },
          {
            id: 9,
            thumbnailImage: 'https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            title: 'Green',
            viewCount: 123,
            link: '#',
          },
        ],
        [
          {
            id: 6,
            thumbnailImage: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            title: 'Green',
            viewCount: 123,
            link: '#',
          },
          {
            id: 7,
            thumbnailImage: 'https://images.unsplash.com/photo-1665686307516-1915b9616526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            title: 'Surface',
            viewCount: 123,
            link: '#',
          },
          {
            id: 8,
            thumbnailImage: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
            title: 'Google',
            viewCount: 123,
            link: '#',
          },
          {
            id: 10,
            thumbnailImage: 'https://images.unsplash.com/photo-1665686307516-1915b9616526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            title: 'Surface',
            viewCount: 123,
            link: '#',
          },
        ],
      ],
    }
  },
  mounted () {
    this.getCategories();
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
          this.categories = response.data.results;
          console.log(this.categories);
        })
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
    align-items: flex-start;
    justify-content: center;
  }

  #artwork content * {
    transition: all 500ms ease;
  }

  #artwork content .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  #artwork content .item {
    position: relative;
    margin: 10px;
  }

  #artwork content .item a {
    color: black;
    text-decoration: blink;
  }

  #artwork content .item .thumbnail {
    width: 100%;
  }

  #artwork content .item img {
    max-width: 100%;
    /* width: 100%; */
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
</style>