<template>
    <div class="slider">
        <div ref="backgrounds" class="backgrounds">
            <div
                v-for="(item, index) in images"
                :key="index"
                :style="`background-image: url(${item.url});`"
                class="item"
                >
            </div>
        </div>

        <div class="titles" :style="{color: `${images[current].color}`}">
            <h2>{{ images[current].title }}</h2>
            <a :href="images[current].link" class="link">
                <span class="text">details</span>
                <span class="material-icons">navigate_next</span>
            </a>
        </div>

        <div class="slider-control">
            <div class="wrap">
                <button
                    v-for="item in images"
                    :key="item.id"
                    :class="{ active: item.id == current }"
                    class="circle"
                    @click="slideControlHandler(item.id)"
                ></button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Nullable<T> = T | undefined;

export default defineComponent({
    data () {
    return {
        slideInterval: undefined as Nullable<NodeJS.Timer>,
        current: 0,
        images: [
            {
                id: 0,
                alt: 'img',
                color: 'black',
                title: 'Hello, World!',
                link: '#',
                url: 'https://images.unsplash.com/photo-1659478039681-0ebbf73c7fb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80'
            },
            {
                id: 1,
                alt: 'img',
                color: 'black',
                title: '요건 뭘까요?',
                link: '#',
                url: 'https://images.unsplash.com/photo-1664110320562-1858ec498640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80'
            },
            {
                id: 2,
                alt: 'img',
                color: 'red',
                title: '몰라요...',
                link: '#',
                url: 'https://images.unsplash.com/photo-1664448003794-2d446c53dcae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1324&q=80'
            },
            {
                id: 3,
                alt: 'img',
                color: 'black',
                title: '코딩하는거 피곤해요 ㅠㅠ',
                link: '#',
                url: 'https://images.unsplash.com/photo-1664447972779-316251bd8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80'
            },
            {
                id: 4,
                alt: 'img',
                color: 'black',
                title: '언제까지 이거 하고 있어야 할까요????',
                link: '#',
                url: 'https://images.unsplash.com/photo-1665690399857-9de8bbbeb108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80'
            },
            {
                id: 5,
                alt: 'img',
                color: 'white',
                title: '재미 재미 재미',
                link: '#',
                url: 'https://images.unsplash.com/photo-1664448003365-e1b05ffd509d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3731&q=80'
            }
        ]
    }
    },
    mounted() {
        this.slideInterval = setInterval(() => this.setSlide(this.current + 1), 3000);
    },
    methods: {
        slideControlHandler(slideNum: number) {
            this.setSlide(slideNum);
            clearInterval(this.slideInterval);
        },
        setSlide(slideNum: number) {
            this.current = slideNum > this.images.length - 1 ? 0 : slideNum

            const backgrounds: HTMLElement = this.$refs.backgrounds! as HTMLElement
            backgrounds.style.transform = `translateX(${-100 * this.current}%)`
        },
    },
})
</script>

<style scoped>
    /* MOBILE */

    .slider {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .backgrounds {
        min-width: 100%;
        height: 100%;
        display: flex;

        transition: transform 500ms ease;
        /* transform: translateX(-100%); */
    }

    .backgrounds .item {
        min-width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .titles {
        width: 94%;
        height: 100%;
        padding: 0 3%;

        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .titles h2 {
        text-align: center;
        font-size: 60px;
        transition: all 300ms ease;
    }

    .titles .link {
        color: white;
        text-decoration: blink;
        text-align: center;

        padding: 10px 20px;
        background-color: rgb(28, 28, 28);
        border: 3px solid rgb(28, 28, 28);
        border-radius: 50px;

        transition: all 300ms ease;
    }

    .titles .link:hover {
        color: rgb(28, 28, 28);
        background-color: white;
    }

    .titles .link .text {
        position: relative;
        left: 5px;
        bottom: 5px;
    }

    .titles .link .material-icons {
        position: relative;
        left: 5px;
        top: 1px;
    }

    .slider-control {
        width: 100%;
        position: absolute;
        bottom: 20px;
    }

    .slider-control .wrap {
        width: fit-content;
        height: fit-content;

        padding: 10px 15px;
        margin: 0 auto;

        background-color: rgba(250, 250, 250, 0.2);

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .slider-control .circle {
        width: 15px;
        height: 15px;

        background-color: black;
        border: none;
        border-radius: 50px;
        margin: 0 10px;

        cursor: pointer;
        transition: width 150ms ease;
    }

    .slider-control .circle.active {
        width: 50px;
    }

    /* TABLET */
    @media screen and (min-width: 800px) {
        .titles h2 {
            font-size: 80px;
        }
    }

    /* DESKTOP */
    @media screen and (min-width: 1200px) {
        .titles h2 {
            font-size: 100px;
        }
    }
</style>