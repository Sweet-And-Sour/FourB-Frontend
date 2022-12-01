<template>
    <div>
        <GlobalNavigationBar />

        <main>
            <div class="author">
                <div class="avatar"></div>
                <span class="username">Username</span>
            </div>

            <h1>Title</h1>

            <article></article>

            <div class="recommand"></div>

            <div class="comments"></div>
        </main>

        <GlobalFotter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalNavigationBar from '~/components/GlobalNavigationBar.vue';
import GlobalFotter from '~/components/GlobalFotter.vue';

export default defineComponent({
    components: { GlobalNavigationBar, GlobalFotter }
})
</script>

<style scoped>

</style>