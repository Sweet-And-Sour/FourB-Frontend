<template>
  <div id="team-page">
    <GlobalNavigationBar />

    <div class="background">
      <h2>개성 넘치는 다양한 팀들을 만나보세요!</h2>
    </div>

    <section id="my-teams">
        <h1>My Teams</h1>

        <div class="teams">
          <a
            v-for="item in myTeams" 
            :key="item.name"
            :href="item.link"
          >
            <div class="item">{{ item.name }}</div>
          </a>
        </div>

        <div class="d-grid">
          <a href="/team/edit" class="btn btn-outline-primary mt-3" type="button">Add New Team</a>
        </div>
      </section>

    <section id="find-teams">
      <h1>Find the Teams</h1>

      <div class="controller">
        <button class="btn ms-2" :class="(currentSelectedField == '' ? 'btn-secondary' : 'btn-outline-secondary')">
          <i class="bi bi-archive"></i>
          All
        </button>

        <button
          v-for="item in fields"
          :key="item.name"
          type="button"
          class="btn ms-2"
          :class="(currentSelectedField == item.name ? 'btn-secondary' : 'btn-outline-secondary')"
        >
          <i class="bi" :class="`${item.icon}`"></i>
          {{ item.name }}
        </button>
      </div>

      <div class="teams">
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
      currentSelectedField: '',
      myTeams: [
        {
            name: "Team1",
            link: "#",
        },
        {
            name: "Team2",
            link: "#",
        },
      ],
      fields: [
        {
          icon: 'bi-gear',
          name: 'Test',
          link: '#'
        },
        {
          icon: 'bi-gear',
          name: 'Test2',
          link: '#'
        },
        {
          icon: 'bi-gear',
          name: 'Test3',
          link: '#'
        }
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
        }
      ]
    }
  }
})
</script>

<style scoped>
  #team-page .background {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  #team-page .background::before {
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

  #team-page .background h2 {
    font-size: 30px;
    color: white;
    z-index: 1;
  }

  #team-page > section {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
  }

  h1 {
    font-size: 30px;
    color: gray;
    padding-bottom: 30px;
    margin: 20px 0;
    border-bottom: 1px solid gray;
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

  #find-teams .teams {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  #find-teams .teams .item {
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
    margin: 20px;
  }

  #find-teams .teams .item .avatar {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 20px 0;
  }

  #find-teams .teams .item .name {
    font-size: 20px;
  }

  #find-teams .teams .item .description {
    font-size: 16px;
  }
</style>
