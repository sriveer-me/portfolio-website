<template>
    <PhatProjectCard 
        title="Blog Website"
        :tags="[
            {
                name: 'HTML5',
                image: require('@/assets/images/html-logo.png')
            },
            {
                name: 'CSS3',
                image: require('@/assets/images/css-logo.png')
            },
            {
                name: 'JavaScript',
                image: require('@/assets/images/js-logo.png')
            },
            {
                name: 'Vue3',
                image: require('@/assets/images/vue3-logo.png')
            },
            {
                name: 'Naive UI',
                image: require('@/assets/images/naive-ui-logo.png')
            },
            {
                name: 'Bulma',
                image: require('@/assets/images/bulma-logo.png')
            },
            {
                name: 'Node.js',
                image: require('@/assets/images/nodejs-logo.png')
            },
            {
                name: 'Express.js',
                image: require('@/assets/images/express-logo.png')
            },
            {
                name: 'Heroku',
                image: require('@/assets/images/heroku-logo.png')
            },
            {
                name: 'Netlify',
                image: require('@/assets/images/netlify-logo.png')
            },
            {
                name: 'JSON',
                image: require('@/assets/images/json-logo.png')
            },
            {
                name: 'MySQL',
                image: require('@/assets/images/mysql-logo.png')
            },
        ]"
        :images="[
            require('@/assets/images/quiz-app-1.png'),
            require('@/assets/images/quiz-app-2.png'),
            require('@/assets/images/quiz-app-3.png'),
            require('@/assets/images/quiz-app-4.png'),
            require('@/assets/images/quiz-app-5.png'),
            require('@/assets/images/quiz-app-6.png'),
        ]"
    >
        <template #projectDescription>
            <p class="strong text-center text-small">
                This fully responsive website written using <a class="link" href="https://v3.vuejs.org/">Vue3</a> packs a pretty punch with its impressive features like:                            
            </p>
            <ul class="project-description-list">
                <li>
                    <p class="bodyText">
                        Fully featured searching with the capability to <a class="link" href="https://fusejs.io/">Fuzzy Search</a> and result filter using <strong>Custom Tags</strong> easily declarable by a non programmer in a seperate json file.
                    </p>
                </li>
                <li>
                    <p class="bodyText">
                        The integration of a component library in the form of <a class="link" href="https://www.naiveui.com/en-US/os-theme">Naive UI</a> allows me to quickly and correctly implement complex Ui elements which otherwise would have taken far too long to write anf test for an acceptable production level performance.
                    </p>
                </li>
                <li>
                    <p class="bodyText">
                        <a class="link" href="https://router.vuejs.org/">Vue router</a> coupled with <a class="link" href="https://v3.vuejs.org/guide/transitions-enterleave.html#transitioning-single-elements-components">transitions using Vue3</a> allows for seamless transition between different pages of the blog all the while retaining the feel of a single page application.
                    </p>
                </li>
            </ul>
            <div class="sticker-box">
                <Icon size="64" color="#262525">
                    <LogoVue />
                </Icon>
                <Icon size="64" color="#262525">
                    <Json />
                </Icon>
                <Icon size="64" color="#262525">
                    <Js />
                </Icon>
            </div>
        </template>
    </PhatProjectCard>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.link{
    text-decoration: none;
    color: map-get($accent,"light-mode");
    font-weight: 400;
}

.project-description-list{
    list-style:square;
    li{
        margin-top: var(--spacing-normal);
    }
}

.sticker-box{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
}
</style>

<script>
import PhatProjectCard from '@/components/PhatProjectCard';

import { Icon } from '@vicons/utils'

import LogoVue from '@vicons/ionicons5/LogoVue'
import Json from '@vicons/carbon/Json'
import Js from '@vicons/fa/Js';

export default {
    name: "FlappyBirdPhatCard",
    components:{
        PhatProjectCard,

        Icon,
        LogoVue,
        Json,
        Js   
    }
}
</script>