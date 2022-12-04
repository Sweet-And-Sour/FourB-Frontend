<template>
    <footer>
        <div class="line"></div>

        <div class="wrap">
            <span class="logo"><i><NuxtLink to="#">4b</NuxtLink></i></span>
            <span class="copyright">THIS PAGE IS DEMO</span>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped>
    footer {
        width: 100%;
        height: fit-content;

        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer > .wrap {
        width: 100%;
        max-width: 1200px;
        height: 100px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .line {
        width: 100%;
        border-top: 1px solid black;
    }

    footer > .wrap > span {
        margin: 0 20px;
    }

    a {
        color: rgb(28, 28, 28);
        text-decoration: blink;
    }

    .logo {
        font-family: 'Fondamento', cursive;
        font-weight: bold;
        font-size: 25px;
    }
</style>