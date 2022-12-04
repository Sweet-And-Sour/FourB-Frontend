<template>
    <contents>
        <NuxtLink
            v-for="item in items"
            :key="item.id"
            to="#"
            class="item"
        >
            <div class="thumbnail" :style="`background-image: url(${item.thumbnail});`">
            </div>

            <span class="title">{{ item.title }}</span>

            <div class="author">
                <div class="avatar" :style="`background-image: url(${item.authorAvatar});`"></div>
                <span class="username">{{ item.authorUsername }}</span>
            </div>
        </NuxtLink>
    </contents>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
    return {
        items: [
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            },
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            },
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            },
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            },
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            },
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            },
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            },
            {
                id: 0,
                title: 'Test item, test title, hahahahahahahah hohoohohohohhohohoolllllllllllll',
                link: '#',
                thumbnail: 'https://images.unsplash.com/photo-1665682884347-11de2487e957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
                authorUsername: 'kangaroo',
                authorAvatar: 'https://images.unsplash.com/photo-1665677602807-39836757ce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
            }
        ]
    }
    }
})
</script>

<style scoped>
    /* MOBILE */

    contents {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 5px;
        row-gap: 20px;
        justify-content: stretch;
        /* align-items: center; */
    }

    contents a {
        color: black;
        text-decoration: blink;
    }

    .item {
        max-width: 350px;
        width: fit-content;
        height: fit-content;

        display: flex;
        flex-direction: column;

        margin: 0 auto;
        cursor: pointer;
    }

    .item:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    }

    .item .thumbnail{
        width: 100%;
        height: 200px;
        background-color: gray;
        background-size: cover;
    }

    .item .title {
        width: 300px;
        padding: 10px;
        overflow-wrap: anywhere;

        font-size: 28px;
        font-weight: bold;

        margin-top: 10px;
        margin-bottom: 5px;
    }

    .item .author {
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .item .author .avatar {
        width: 30px;
        height: 30px;
        /* border: 2px solid rgb(28, 28, 28); */
        border-radius: 50%;
        background-size: cover;
    }

    .item .author .username {
        margin-left: 10px;
    }


    /* TABLET */
    @media screen and (min-width: 800px) {
        contents {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* DESKTOP */
    @media screen and (min-width: 1200px) {
        contents {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>