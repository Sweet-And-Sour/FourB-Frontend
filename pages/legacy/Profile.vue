<template>
    <div>
        <GlobalNavigationBar />

        <section id="profile">
            <h2>Profile</h2>

            <div class="avatar"></div>

            <a href="#" class="username">kangaroo</a>
            <a href="#" class="email">kangaroo@fourB</a>

            <div class="introduction">
                Hello!!
            </div>

            <a href="#" class="website">blog.kangaroo.fourB</a>
            <a href="#" class="user-field">Designer</a>

            <button class="btn">Change Password</button>
        </section>

        <section id="recent-activity">
            <h2>Recent Activity</h2>
        </section>

        <section id="friends">
            <h2>Friends</h2>
        </section>

        <GlobalFotter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalFotter from '~/components/GlobalFotter.vue';

export default defineComponent({
    components: { GlobalFotter },
    data() {
    return {
    }
    }
})
</script>

<style scoped>
    section {
        width: 100%;
        max-width: 1200px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        margin: 50px auto;
    }
</style>