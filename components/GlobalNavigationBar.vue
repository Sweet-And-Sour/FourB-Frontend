<template>
  <nav class="navbar navbar-expand-lg" :class="`navbar-${navbarColor} bg-${bgColor}`">
    <AuthChecker />

    <div class="container-fluid">
      <a class="navbar-brand logo" href="/home">4b</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="item in navItems"
            :key="item.title"
            class="nav-item"
          >
            <a class="nav-link active" aria-current="page" :href="item.link">{{ item.title }}</a>
          </li>
        </ul>

        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </div>

        <div class="dropdown">
          <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span v-if="isSign">{{ username }}</span>
            <span v-else>Sign In</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="/discovery">Discover</a></li>
            <li><a class="dropdown-item" href="/edit">Create</a></li>
            <li><a class="dropdown-item" href="/team">Team</a></li>
            
            <li><hr class="dropdown-divider"></li>

            <li v-if="!isSign"><a class="dropdown-item" href="/sign">Sign In / Up</a></li>

            <li v-if="isSign"><a class="dropdown-item" href="/profile">Profile</a></li>
            <li v-if="isSign"><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isAuthPage: {
      type: Boolean,
      default: false,
    },
    navbarColor: {
      type: String,
      default: 'light'
    },
    bgColor: {
      type: String,
      default: 'light'
    }
  },
  setup () {
    return {}
  },
  data () {
    return {
      navItems: [
        {
          title: 'Discovery',
          link: '/discovery',
        },
        {
          title: 'Create',
          link: '/edit',
        },
        {
          title: 'Team',
          link: '/team',
        },
      ],
    }
  },
  computed: {
    isSign: {
      get () {
        return this.$accessor.accessToken != null && this.$accessor.accessToken !== '';
      },
      set () {}
    },
    username: {
      get () {
        return this.$accessor.UserModule.username;
      },
      set () {}
    }
  },
  beforeMount () {
    this.authPageCheck();
  },
  methods: {
    logout (_event: any) {
      this.$accessor.logout();
      this.$accessor.UserModule.reset();

      location.reload();
      
      return undefined;
    },
    authPageCheck () {
      if (this.isAuthPage) {
        if (this.$accessor.accessToken == null || this.$accessor.accessToken === '') {
          alert("해당 페이지는 로그인이 필요합니다.");
          window.location.href = '/sign';
        }
      }
    }
  },
})
</script>

<style scoped>
.navbar {
    height: 60px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .navbar * {
    transition: all 300ms ease;
  }

  .navbar .container-fluid {
    max-width: 1200px;
  }

  .logo {
    font-family: 'Fondamento', cursive;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {

    #navbarToggler .dropdown {
      float: left;
    }

    #navbarToggler .dropdown ul {
      left: 0;
    }

    .navbar .navbar-collapse.collapsing,
    .navbar .navbar-collapse.collapse {
      background-color: rgb(248, 249, 250);
      position: fixed;
      top: 50px;
      left: 0;
      width: 100%;
    }

    .navbar .navbar-collapse.collapse {
      padding: 20px;
    }
  }
</style>