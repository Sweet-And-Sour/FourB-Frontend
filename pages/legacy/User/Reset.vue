<template>
    <div>
        <GlobalNavigationBar />

        <main>
            <h1>Enter your email address</h1>

            <div class="signin-form">
                <div class="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>

                <button class="btn">Reset the password</button>
                <NuxtLink to="/User/SignIn" class="btn pink">Sign In</NuxtLink>
            </div>
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
        margin: 0 auto;
        padding: 50px 0;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    hr {
        width: 300px;
        /* border: 1px solid black; */
    }

    a {
        color: blue;
        text-decoration: blink;
        border-bottom: 2px solid blue;
    }

    .btn {
        width: 100%;
        max-width: 300px;
        height: 50px;
        margin: 10px 0;

        color: white;
        font-weight: bold;
        border: none;
        background-color: #3381ff;

        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    .btn.outline {
        color: black;
        border: 2px solid black;
        background-color: transparent;
    }

    .btn.pink {
        color: #ff5973;
        background-color: pink;
    }

    .signin-form {
        margin: 30px 0;
        padding: 30px 0;

        border-top: 1px dashed black;
        border-bottom: 1px dashed black;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .field {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .field label {
        color: gray;
        font-weight: bold;
    }

    .field input {
        width: 280px;
        min-height: 30px;
        padding: 5px 10px;
        border: none;

        color: black;
        background-color: rgb(232, 240, 254);

        margin: 5px 0;
    }
</style>