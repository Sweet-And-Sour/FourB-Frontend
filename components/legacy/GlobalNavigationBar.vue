<template>
    <div class="header" :class="{'transparent-mode': isTransparent}">
        <div class="left">
            <span class="logo"><i><NuxtLink to="/Home">4b</NuxtLink></i></span>

            <nav>
                <NuxtLink to="#">Discovery</NuxtLink>
                <NuxtLink to="#">Find teams</NuxtLink>
                <NuxtLink to="#">Upload your works</NuxtLink>
                <NuxtLink to="#">About us</NuxtLink>
            </nav>
        </div>

        <div class="right">
            <NuxtLink class="item" to="/Search"><span class="material-icons">search</span></NuxtLink>
            <NuxtLink class="item" to="/User/SignIn"><span class="material-icons">account_circle</span></NuxtLink>
        </div>

        <div class="hamburder-menu">
            <a class="item" href="#"><span class="material-icons">menu</span></a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        isTransparent: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style scoped>
    /* MOBILE */
    
    a {
        color: white;
        text-decoration: blink;
    }

    .header {
        width: 100%;
        max-width: 1200px;

        height: 80px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin: 10px auto;

        color: white;
        background-color: rgba(28, 28, 28);
    }

    .header.transparent-mode {
        color: black;
        background-color: rgba(250, 250, 250, 0.2);
    }

    .header.transparent-mode a {
        color: rgb(28, 28, 28);
    }

    .header > div {
        margin: 0 20px;
    }

    .left, .right {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin: 0 10px;
    }

    .logo {
        font-family: 'Fondamento', cursive;
        font-weight: bold;
        font-size: 25px;
    }

    nav, .right {
        display: none;
    }

    /* TABLET */
    @media screen and (min-width: 800px) {
        .header {
            height: 80px;
        }

        .left, .right {
            margin: 0 10px;
        }

        .logo {
            font-size: 32px;
        }

        nav, .right {
            display: inline;
        }

        .hamburder-menu {
            display: none;
        }

        nav {
            margin-left: 20px;
        }

        nav a {
            font-size: 20px;
            margin: 0 5px;
        }

        nav > a::before {
            content: '';
            width: 3px;
            height: 3px;
            background-color: white;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 15px;
            display: inline-block;
        }

        nav > a:first-of-type::before {
            display: none;
        }

        .header.transparent-mode nav > a::before {
            background-color: black;
        }

        .right .material-icons {
            font-size: 25px;
            margin: 0 5px;
        }
    }

    /* DESKTOP */
    @media screen and (min-width: 1200px) {}
</style>