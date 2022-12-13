<template>
  <div class="comment-wrap">
      <div class="statistics">
        <!-- <span>
          <i class="bi bi-heart"></i>
          62
        </span> -->

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
            <span class="input-commnet-length">{{ commentText.length }} / {{ maxCommentTextLength }}</span>
          </div>

        </div>
      </div>

      <div class="btn-wrap">
        <button id="add-comment-btn" class="btn btn-secondary" @click="addComment">Add Comment</button>
      </div>

      <content class="comments">
        <div
          v-for="item in comments"
          :key="item.id"
          class="item"
          :class="{active: item.username === username}"
        >
          <div class="avatar" :style="`background-image: url('${item.avatar}');`"></div>

          <div class="wrap">
            <div>
              <span class="username">{{ item.username }}</span>
              <!-- <span class="created">{{ item.created_date }}</span> -->
            </div>

            <div class="content">{{ item.contents }}</div>

            <!-- <div class="btn-group">
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
            </div> -->
          </div>

          <button v-if="item.username === username" class="delete-btn" @click="() => deleteComment(item.id)">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <!-- <div class="d-grid mx-auto my-3">
          <button class="btn btn-outline-secondary" type="button">
            More
          </button>
        </div> -->
      </content>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    contentId: {
      type: Number,
      default: 0,
    }
  },
  setup () {
    return {}
  },
  data () {
    return {
      commentText: '',
      comments: [
        {
          id: 0,
          avatar: '',
          username: '',
          contents: '',
          created_date: '',
        }
      ],
      maxCommentTextLength: 1024,
    }
  },
  computed: {
    username: {
      get () {
        return this.$accessor.UserModule.username || '';
      },
      set () {}
    }
  },
  mounted () {
    this.comments = [];
    this.getComments();
  },
  methods: {
    getComments () {
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      };

      axios
        .get(`/api/comment/${this.contentId}`, config)
        .then((response) => {
          if (response.data.success) {
            this.comments = response.data.comments || [];
          } else {
            alert('댓글을 불러오는 과정에서 오류가 발생했습니다!');
            console.error(response);
          }
        })
        .catch((error) => {
          alert('댓글을 불러오는 과정에서 오류가 발생했습니다!');
          console.error(error);
        })
    },
    addComment (_event: any) {
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$accessor.accessToken}`
        }
      };

      const data = {
        username: this.username,
        content_id: this.contentId,
        contents: this.commentText,
      };

      axios
        .post('/api/comment', data, config)
        .then((response) => {
          if (response.data.success) {
            this.commentText = '';
            this.getComments();

          } else {
            throw response;
          }
        })
        .catch((error) => {
          alert('댓글 생성에 오류가 발생했습니다!');
          console.error(error);
        });

      return undefined;
    },
    deleteComment (id: number) {
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$accessor.accessToken}`
        }
      };

      axios
        .delete(`/api/comment/${id}`, config)
        .then((response) => {
          if (response.data.success) {
            alert('댓글이 삭제되었습니다!');
            this.getComments();
          } else {
            throw response;
          }
        })
        .catch((error) => {
          alert('댓글 삭제 과정에서 문제가 발생했습니다!');
          console.error(error);
        })

      return undefined;
    }
  },
})
</script>

<style scoped>

.comment-wrap  {
    width: 100%;
    background-color: #F1F3F6;
    border-radius: 20px;
    margin: 40px 0;
    padding: 20px;
  }

  .comment-wrap .statistics {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .comment-wrap .statistics span {
    font-size: 20px;
    padding: 0 10px;
    color: gray;
  }

  .comment-wrap .statistics i {
    margin-right: 5px;
  }

  .comment-wrap .new-comment {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .comment-wrap .new-comment .avatar {
    font-size: 35px;
    margin-right: 20px;
    color: gray;
  }

  .comment-wrap .new-comment .input {
    width: 100%;
  }

  .comment-wrap .input-commnet-length {
    float: right;
    font-size: 18px;
    color: gray;
  }

   .comment-wrap > .btn-wrap {
    text-align: right;
    margin-top: 20px;
  }

  .comments {
    margin-top: 20px;
  }

  .comments .item {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px 0;
    position: relative;
  }

  .comments .item.active {
    color: blue;
  }

  .comments .item .wrap {
    width: 100%;
  }

  .comments .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    font-size: 35px;
    margin-right: 20px;
    color: gray;
  }

  #comments .username {
    font-size: 20px;
    color: gray;
  }

  .comments .created {
    font-size: 16px;
    color: lightslategray;
    padding: 0 10px;
  }

  .comments .content {
    font-size: 20px;
    margin: 10px 0;
  }

  .comments .btn-group .btn {
    font-size: 18px;
    margin: 0;
  }

  .comments .delete-btn {
    border: none;
    background: none;
    color: red;
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
