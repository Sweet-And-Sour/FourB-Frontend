<template>
  <div id="profile-page">
    <GlobalNavigationBar />

    <content>
      <div class="background" :style="`background-image: url(${profile.backgroundImage});`"></div>
      <section id="profile">
        <div class="info">
          <div class="avatar" :style="`background-image: url(${profile.avatarImage});`"></div>

          <h2 class="username">{{ profile.username }}</h2>

          <p class="bio">{{ profile.introduction }}</p>

          <p class="field">
            <i class="bi bi-briefcase-fill"></i>
            {{ profile.field == '' ? '분야가 설정되지 않았습니다' : userData.field }}
          </p>

          <div class="statistics">
            <div class="item">
              <div class="number">100</div>
              <span class="title">Works</span>
            </div>
            
            <div class="item">
              <div class="number">100</div>
              <span class="title">Likes</span>
            </div>

            <div class="item">
              <div class="number">100</div>
              <span class="title">Teams</span>
            </div>
          </div>

          <div class="links">
            <a href="#"><i class="bi bi-heart-fill"></i></a>
            <a href="#"><i class="bi bi-share-fill"></i></a>
          </div>

          <div class="contacts">
            <span>Contact</span>
            <a href="#"><i class="bi bi-github"></i></a>
            <a href="#"><i class="bi bi-google"></i></a>
            <a href="#"><i class="bi bi-discord"></i></a>
          </div>
        </div>

        <div class="edit-btn">
          <a class="btn btn-warning" type="button" href="/profile/edit">Edit Profile</a>
        </div>
      </section>

      <section id="my-teams">
        <h1>My Teams</h1>

        <div class="teams">
          <a
            v-for="item in teams" 
            :key="item.teamName"
            :href="item.link"
          >
            <div class="item">{{ item.teamName }}</div>
          </a>
        </div>
        <div class="d-grid">
          <a href="/team/edit" class="btn btn-outline-primary mt-3" type="button">Add New Team</a>
        </div>
      </section>

      <section id="my-works">
        <h1>My Works</h1>

        <div class="controller">
          <div class="left">
            <button
              v-for="(item, index) in worksCategory"
              :key="item.name"
              type="button"
              class="btn ms-2"
              :class="(currentWorksCategory == index ? 'btn-secondary' : 'btn-outline-secondary')"
            >
              <i class="bi" :class="`${item.icon}`"></i>
              {{ item.name }}
            </button>
          </div>

          <div class="right"></div>
        </div>

        <HorizontalSlider
          :item-width="300"
          :move-step="2"
          :item-length="works.length"
        >
          <div
            v-for="item in works"
            :key="item.id"
            class="card"
            style="width: 18rem;"
          >
            <div class="card-img-top" :style="`background-image: url('${item.thumbnailImage}');`"></div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <div class="d-grid">
                <a href="#" class="btn btn-outline-primary">More</a>
              </div>
            </div>
          </div>
        </HorizontalSlider>
      </section>
    </content>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {};
    },
    data() {
        return {
            profile: ({} as any),
            teams: [
                {
                    teamName: "Team1",
                    link: "#",
                },
                {
                    teamName: "Team2",
                    link: "#",
                },
            ],
            currentWorksCategory: 0,
            worksCategory: [
                {
                    icon: "bi-archive",
                    name: "All",
                },
                {
                    icon: "bi-brush",
                    name: "Art",
                },
                {
                    icon: "bi-gear",
                    name: "Design",
                },
                {
                    icon: "bi-gear",
                    name: "Music",
                },
            ],
            works: [
                {
                    id: 0,
                    thumbnailImage: "https://images.unsplash.com/photo-1670147492499-d05501793481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                    title: "Title",
                    author: "Author",
                    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                    link: "#",
                },
                {
                    id: 1,
                    thumbnailImage: "https://images.unsplash.com/photo-1670147492499-d05501793481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                    title: "Title",
                    author: "Author",
                    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                    link: "#",
                },
                {
                    id: 2,
                    thumbnailImage: "https://images.unsplash.com/photo-1670147492499-d05501793481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                    title: "Title",
                    author: "Author",
                    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                    link: "#",
                },
                {
                    id: 3,
                    thumbnailImage: "https://images.unsplash.com/photo-1670147492499-d05501793481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                    title: "Title",
                    author: "Author",
                    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                    link: "#",
                },
                {
                    id: 4,
                    thumbnailImage: "https://images.unsplash.com/photo-1670147492499-d05501793481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                    title: "Title",
                    author: "Author",
                    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                    link: "#",
                },
                {
                    id: 5,
                    thumbnailImage: "https://images.unsplash.com/photo-1670147492499-d05501793481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                    title: "Title",
                    author: "Author",
                    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                    link: "#",
                },
                {
                    id: 6,
                    thumbnailImage: "https://images.unsplash.com/photo-1670147492499-d05501793481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
                    title: "Title",
                    author: "Author",
                    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                    link: "#",
                },
            ],
        };
    },
    computed: {
      userData: {
        get () {
          return this.$accessor.UserModule;
        },
        set () {}
      },
    },
    mounted () {
      const username = this.$route.query.username;

      if (username === undefined) {
        alert('존재하지 않는 팀 입니다');
        history.back();

      } else {
        this.getTeamData();
      }
    },
    methods: {
      async getTeamData () {
        const username = this.$route.query.username;

        const config = {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          }
        }

        try {
          const response = await axios.get(`/api/team/${username}`, config);

          if (response.data.success && response.data.data.length >= 1) {
            this.profile = response.data.data[0];
            this.$forceUpdate();

          } else {
            alert('존재하지 않는 팀 입니다');
            history.back();
          }

        } catch (error) {
          alert('팀 정보를 불러오면서 오류가 발생했습니다');
          console.error(error);
        }
      }
    },
})
</script>

<style scoped>
  content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  content .background {
    width: 100%;
    height: 300px;
    background-size: cover;
  }

  section {
    width: 100%;
    max-width: 1200px;
  }

  h1 {
    font-size: 30px;
    color: gray;
    padding-bottom: 30px;
    margin: 20px 0;
    border-bottom: 1px solid gray;
  }

  #profile .edit-btn {
    position: absolute;
    top: 80px;
    right: 10px;
  }

  #profile .info {
    position: relative;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #profile .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-size: cover;
    background-color: white;
    margin: 20px 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }

  #profile .username {
    font-size: 35px;
    color: black;
  }

  #profile .bio {
    font-size: 20px;
    color: gray;
  }

  #profile .field {
    font-size: 16px;
    color: coral;
  }

  #profile .statistics {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }

  #profile .statistics .item {
    width: 250px;
    height: 250px;
    background-color: #D9D9D9;
    border-radius: 20px;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #profile .statistics .item .number {
    width: 120px;
    height: 120px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    font-size: 25px;
    font-weight: bold;
  }

  #profile .statistics .item .title {
    padding: 20px 0;
    font-size: 25px;
    color: gray;
  }

  #profile .links,
  #profile .contacts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }

  #profile .links a {
    font-size: 30px;
    text-decoration: blink;
    color: gray;
    margin: 0 20px;
  }

  #profile .contacts span {
    font-size: 18px;
    color: lightgray;
    margin-right: 10px;
  }

  #profile .contacts a {
    font-size: 20px;
    text-decoration: blink;
    color: black;
    margin: 10px;
  }

  #my-teams .teams a {
    text-decoration: blink;
    display: inline-block;
  }

  #my-teams .teams .item {
    background-color: #F1F3F6;
    border-radius: 20px;
    padding: 30px 50px;
    margin: 20px;
    font-size: 15px;
    color: black;
  }

  #my-works .slider {
    margin: 40px 0;
  }

  .card {
    display: inline-block;
    margin: 0 20px;
  }

  .card .card-img-top {
    width: 100%;
    height: 300px;
    background-size: cover;
  }

  #likes .slider {
    margin: 40px 0;
  }

  .btn-group.full-width {
    width: 100%;
  }

  .btn-group.full-width a:nth-child(1) {
    flex: 4;
  }

  .btn-group.full-width a:nth-child(2) {
    flex: 1;
  }
</style>
