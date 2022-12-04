<template>
    <div>
        <GlobalNavigationBar />

        <main>
            <h1>Search</h1>

            <input type="text" name="search-query" placeholder="Say something~" />
        </main>

        <GlobalFotter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalNavigationBar from '~/components/legacy/GlobalNavigationBar.vue';
import GlobalFotter from '~/components/legacy/GlobalFotter.vue';

export default defineComponent({
    components: { GlobalNavigationBar, GlobalFotter },
})
</script>

<style scoped>
    main {
        width: 100%;
        max-width: 1200px;
        height: fit-content;
        margin: 50px auto;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    input[name="search-query"] {
        width: 500px;
        min-height: 60px;
        padding: 5px 10px;
        border: none;

        color: black;
        background-color: rgb(232, 240, 254);

        margin: 5px 0;

        text-align: center;
        font-size: 20px;
    }
</style>