<template>
    <div>
        <header>
            <GlobalNavigationBar is-transparent />
        </header>

        <div class="main-slider">
            <FullScreenSlider />
        </div>

        <section id="contents-preview">
            <ContentGrid />
        </section>

        <section id="next-section">
            <img src="https://cdn.pixabay.com/photo/2018/03/20/10/04/illustrator-3242713_1280.jpg" alt="fox" />
            <h2>당신의 작품도 업로드 해보세요!</h2>
            <NuxtLink to="#">Sign In</NuxtLink>
        </section>

        <GlobalFotter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalNavigationBar from '~/components/GlobalNavigationBar.vue';
import FullScreenSlider from '~/components/FullScreenSlider.vue';
import GlobalFotter from '~/components/GlobalFotter.vue';

export default defineComponent({
    components: { GlobalNavigationBar, FullScreenSlider, GlobalFotter },
})
</script>

<style scoped>
    /* MOBILE */
    
    header {
        position: relative;
        z-index: 9;
    }

    .main-slider {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    #contents-preview {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 100vh;
    }

    #next-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 100px 0;
    }

    #next-section img {
        width: 300px;
        margin-bottom: 30px;
    }

    /* TABLET */
    @media screen and (min-width: 800px) {
        #next-section img {
            width: 500px;
        }
    }

    /* DESKTOP */
    @media screen and (min-width: 800px) {}
</style>