<template>
  <div id="view-page">
    <GlobalNavigationBar />

    <main>
      <content class="ql-editor">
        <h1>{{ content.title }}</h1>
        <div v-html="content.contents"></div>
      </content>

      <a v-if="content.username !== ''" id="author" href="/profile?">
        <div
          class="avatar"
          :style="`background-image: url(${author.avatar});`"
        ></div>

        <div class="user">
          <span class="username">{{ author.username }}</span>
          <span class="email">{{ author.email }}</span>
        </div>

        <span class="bio">
          {{ author.introduction }}
        </span>
      </a>

      <!-- DISABLED -->
      <div v-if="false" id="comment-wrap">
        <div class="statistics">
          <span>
            <i class="bi bi-heart"></i>
            62
          </span>

          <span>
            <i class="bi bi-chat-dots"></i>
            {{ comments.length }}
          </span>
        </div>

        <div class="new-comment">
          <div class="avatar">
            <i class="bi bi-person-circle"></i>
          </div>

          <div class="input">
            <div class="mb-3">
              <textarea
                id="exampleFormControlTextarea1"
                v-model="commentText"
                class="form-control"
                rows="3"
                placeholder="댓글을 입력하세요."
                :maxlength="maxCommentTextLength"
              ></textarea>
              <span id="input-commnet-length">{{ commentText.length }} / {{ maxCommentTextLength }}</span>
            </div>

          </div>
        </div>

        <div class="btn-wrap">
          <button id="add-comment-btn" class="btn btn-secondary">Add Comment</button>
        </div>

        <content id="comments">
          <div
            v-for="item in comments"
            :key="item.id"
            class="item"
          >
            <div class="avatar">
              <i class="bi bi-person-circle"></i>
            </div>

            <div>
              <div>
                <span class="username">{{ item.username }}</span>
                <span class="created">1 day ago</span>
              </div>

              <div class="content">{{ item.content }}</div>

              <div class="btn-group">
                <div>
                  <button class="btn likes" type="button">
                    <i class="bi bi-hand-thumbs-up"></i>
                    {{ item.likes }}
                  </button>
                </div>

                <div>
                  <button class="btn unlikes" type="button">
                    <i class="bi bi-hand-thumbs-down"></i>
                    {{ item.unlikes }}
                  </button>
                </div>

                <div>
                  <button href="#" class="btn reply-to" type="button">Reply to</button>
                </div>
              </div>
            </div>
          </div>

          <div class="d-grid mx-auto my-3">
            <button class="btn btn-outline-secondary" type="button">
              More
            </button>
          </div>
        </content>
      </div>
    </main>

    <!-- DISABLED -->
    <section v-if="false" id="other-works">
      <h1>Other Works</h1>

      <HorizontalSlider :item-width="300" :move-step="2" :item-length="works.length">
        <a
          v-for="item in works"
          :key="item.id"
          class="item"
          :href="item.link"
        >
          <div class="thumbnail-image" :style="`background-image: url(${item.thumbnailImage});`"></div>
          <span class="title">{{ item.title }}</span>
          <span class="author">{{ item.author }}</span>
        </a>
      </HorizontalSlider>
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
      content: ({} as any),
      author: ({} as any),
      comments: [
        {
          id: 0,
          username: 'Vinh Bui',
          content: 'Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          createdDataTime: '',
          likes: 0,
          unlikes: 0,
        },
        {
          id: 1,
          username: 'Vinh Bui',
          content: 'Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          createdDataTime: '',
          likes: 0,
          unlikes: 0,
        },
      ],
      works: [
          {
              id: 0,
              thumbnailImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
              title: "Food photos that make you hungry just by looking at them Food photos that make you hungry just by looking at them",
              author: "Author",
              description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
              link: "#",
          },
          {
              id: 1,
              thumbnailImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
              title: "Food photos that make you hungry just by looking at them",
              author: "Author",
              description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
              link: "#",
          },
          {
              id: 2,
              thumbnailImage: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
              title: "Food photos that make you hungry just by looking at them",
              author: "Author",
              description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
              link: "#",
          },
          {
              id: 3,
              thumbnailImage: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80",
              title: "Food photos that make you hungry just by looking at them Food photos that make you hungry just by looking at them",
              author: "Author",
              description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
              link: "#",
          },
          {
              id: 4,
              thumbnailImage: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80",
              title: "Food photos that make you hungry just by looking at them Food photos that make you hungry just by looking at them",
              author: "Author",
              description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
              link: "#",
          },
          {
              id: 5,
              thumbnailImage: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
              title: "Food photos that make you hungry just by looking at them",
              author: "Author",
              description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
              link: "#",
          },
          {
              id: 6,
              thumbnailImage: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
              title: "Food photos that make you hungry just by looking at them",
              author: "Author",
              description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
              link: "#",
          },
      ],
      commentText: '',
      maxCommentTextLength: 1000,
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: '/css/quill.core.css'
      },
    ],
  },
  mounted () {
    this.getContents();
  },
  methods: {
    getContents () {
      const contentId = this.$route.query.id;

      if (contentId === undefined) {
        alert('컨텐츠가 존재하지 않습니다');
        history.back();
      }

      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      };

      axios
        .get(`/api/content/${contentId}`, config)
        .then((response) => {
          if (response.data.success) {
            this.content = response.data.content;

            this.getProfile();
          } else {
            alert('컨텐츠가 존재하지 않습니다');
            history.back();
          }
        })
        .catch((error) => {
          alert(`컨텐츠를 불러오는 과정에서 문제가 발생했습니다 (${error})`);
          history.back();
        });
    },
    getProfile() {
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      };

      axios
        .get(`/api/user/${this.content.username}`, config)
        .then((response) => {
          if (response.data.success) {
            this.author = response.data.data[0];
          }
        })
    }
  },
})
</script>

<style>
  .ql-editor * {
    cursor: initial;
  }

  main {
    width: 100%;
    padding: 0 10px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main > * {
    width: 100%;
    max-width: 1200px;
  }

  main > content {
    margin-top: 20px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
  }

  main > content * {
    max-width: 100%;
    transition: all 500ms ease;
    margin: 20px 0;
  }

  main > content h1 {
    margin-bottom: 10px;
  }

  main > content img {
    max-width: 100%;
  }

  main > content > img:hover {
    border-radius: 0;
  }

  #author {
    min-height: 120px;
    padding: 20px 0;
    border-radius: 20px;
    color: black;
    text-decoration: blink;
    background-color: #F1F3F6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
  }

  #author:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }

  #author > * {
    margin-right: 20px;
  }

  #author .avatar {
    width: 100px;
    height: 100px;
    border: 2px solid lightgray;
    border-radius: 50%;
    background-size: cover;
  }

  #author .user {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  #author .username {
    font-size: 20px;
    color: black;
  }

  #author .email {
    font-size: 18px;
    color: gray;
  }

  #author .bio {
    flex: 1;
    font-size: 16px;
  }

  #comment-wrap  {
    width: 100%;
    background-color: #F1F3F6;
    border-radius: 20px;
    margin: 40px 0;
    padding: 20px;
  }

  #comment-wrap .statistics {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  #comment-wrap .statistics span {
    font-size: 20px;
    padding: 0 10px;
    color: gray;
  }

  #comment-wrap .statistics i {
    margin-right: 5px;
  }

  #comment-wrap .new-comment {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  #comment-wrap .new-comment .avatar {
    font-size: 35px;
    margin-right: 20px;
    color: gray;
  }

  #comment-wrap .new-comment .input {
    width: 100%;
  }

  #input-commnet-length {
    float: right;
    font-size: 18px;
    color: gray;
  }

   #comment-wrap > .btn-wrap {
    text-align: right;
    margin-top: 20px;
  }

  #comments {
    margin-top: 20px;
  }

  #comments .item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 20px 0;
  }

  #comments .avatar {
    font-size: 35px;
    margin-right: 20px;
    color: gray;
  }

  #comments .username {
    font-size: 20px;
    color: gray;
  }

  #comments .created {
    font-size: 16px;
    color: lightslategray;
    padding: 0 10px;
  }

  #comments .content {
    font-size: 20px;
    margin: 10px 0;
  }

  #comments .btn-group .btn {
    font-size: 18px;
    margin: 0;
  }

  #other-works {
    margin-top: 80px;
    margin-bottom: 50px;
  }

  #other-works h1 {
    color: gray;
    padding: 0 20px;
  }

  #other-works .slider {
    margin: 40px 0;
  }

  #other-works .item {
    color: black;
    text-decoration: blink;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  #other-works .item .thumbnail-image {
    width: 300px;
    height: 300px;
    background-size: cover;
    border-radius: 20px;
  }

  #other-works .item:hover .thumbnail-image {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }

  #other-works .item .title {
    color: black;
    font-size: 25px;
    padding: 10px 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  #other-works .item .author {
    color: gray;
    font-size: 18px;
    padding: 3px 10px;
  }
</style>