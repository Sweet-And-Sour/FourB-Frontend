<template>
  <div id="home-page">
    <GlobalNavigationBar />

    <section id="welcome">
      <div class="background"></div>

      <content>
        <h2>Show off<br />your own product</h2>
        <span>Inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration?</span>
        <div>
          <a class="btn btn-primary" type="button" href="/edit">Upload now</a>
        </div>
      </content>
    </section>

    <section class="white-margin">
      <h3>새로운 작품을 경험해 보세요!</h3>
    </section>

    <section id="artworks-slider">
      <HorizontalSlider :item-width="-1">
        <div
          v-for="item in artworkPreview"
          :key="item.id"
          class="item"
          :style="`background-image: url('${item.image}');`"
        >
        </div>
      </HorizontalSlider>

      <div>
        <a class="btn btn-outline-secondary" type="button" href="#">
          <i class="bi bi-plus-lg"></i>
          More
        </a>
      </div>
    </section>

    <section class="white-margin">
      <h3>개성 넘치는 팀들을 만나보세요!</h3>
    </section>

    <section id="teams">
      <HorizontalSlider
        :item-width="250"
        :move-step="2"
        :item-length="teams.length"
      >
        <a
          v-for="item in teams"
          :key="item.name"
          class="item"
          :href="item.link"
        >
          <div class="avatar" :style="`background-image: url('${item.avatar}');`"></div>
          <span class="name">{{ item.name }}</span>
          <span class="description">{{ item.description }}</span>
        </a>
      </HorizontalSlider>
    </section>

    <section id="features">
      <div class="item">
        <div class="icon">
          <i class="bi bi-truck"></i>
        </div>
        <div class="title">
          Various Works
        </div>
        <div class="description">
          We have many different of works. See various works and get ideas
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <i class="bi bi-wallet2"></i>
        </div>
        <div class="title">
          Join the team
        </div>
        <div class="description">
          You can ㅡeet the team and try a new field.
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <i class="bi bi-arrow-clockwise"></i>
        </div>
        <div class="title">
          Upload your own creation
        </div>
        <div class="description">
          You can upload your own special creations and communicate with users.
        </div>
      </div>
    </section>

    <footer>
      <div class="wrap">
        <div class="left">
          ⓒ 2022. <i>Team Sweet</i> All Rights Reserved.
        </div>

        <div class="right">
          Follow Us: 
          <a href="#"><i class="bi bi-github"></i></a>
          <a href="#"><i class="bi bi-discord"></i></a>
          <a href="#"><i class="bi bi-dribbble"></i></a>
        </div>
      </div>
    </footer>
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
      artworkPreview: [
        {
          id: 0,
          title: 'Title',
          image: 'https://images.unsplash.com/photo-1670000806702-8f447448f50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
          link: '#',
        },
        {
          id: 1,
          title: 'Title',
          image: 'https://images.unsplash.com/photo-1670217470538-e442d7d5ec10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          link: '#',
        },
        {
          id: 2,
          title: 'Title',
          image: 'https://images.unsplash.com/photo-1670139018135-6711b8932acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          link: '#',
        },
      ],
      teams: [
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team A',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team B',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team C',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team D',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team E',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team F',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team G',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team H',
          description: 'Team Description',
          link: '#',
        },
        {
          avatar: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg',
          name: 'Team I',
          description: 'Team Description',
          link: '#',
        }
      ]
    }
  }
})
</script>

<style scoped>
  #home-page > section {
    width: 100%;
    position: relative;
    margin: 0 auto;
  }

  #welcome {
    height: 100vh;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  #welcome .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('https://cdn.pixabay.com/photo/2018/03/26/06/20/desktop-3261768_1280.jpg');
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
    z-index: 0;
  }

  #welcome content {
    width: 100%;
    max-width: 550px;
    margin-left: 10%;
    /* margin-top: -20%; */
    padding: 10px 30px;
    z-index: 2;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.3px);
    -webkit-backdrop-filter: blur(7.3px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  #welcome content > * {
    margin: 30px 0;
  }

  section.white-margin {
    width: 100px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #artworks-slider {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #artworks-slider .slider {
    margin-bottom: 40px;
  }

  #artworks-slider .item {
    width: 100vw;
    height: 500px;
    background-size: cover;
  }

  #teams {
    width: 100%;
    max-width: 1200px;
  }

  #teams .item {
    width: 250px;
    height: 300px;
    border-radius: 20px;
    background-color: rgb(240, 240, 240);
    color: black;
    text-decoration: blink;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #teams .item .avatar {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 20px 0;
  }

  #teams .item .name {
    font-size: 20px;
  }

  #teams .item .description {
    font-size: 16px;
  }

  #features {
    width: 100%;
    max-width: 1200px;
    padding: 200px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  #features .item {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px;
  }

  #features .item .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }

  #features .item .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  #features .item .description {
    font-size: 16px;
  }
  
  footer {
    width: 100%;
    height: 80px;
    background-color: #CACBCF;
  }

  footer .wrap {
    width: 100%;
    max-width: 1200px;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  footer {
    color: gray;
  }

  footer .right a {
    color: gray;
    padding: 0 5px;
  }
</style>
