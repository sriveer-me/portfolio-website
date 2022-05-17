<template>
    <PhatProjectCard 
        title="Quiz Game"
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
        liveLink="https://quiz-app-veeru.netlify.app/"
        srcLink="https://github.com/veeru-neerukonda/quiz-app-game"
    >
        <template #project-description-heading>
           This fullstack web game uses both <a class="link" href="https://www.heroku.com/platform">Heroku</a> and <a class="link" href="https://www.netlify.com/">Netlify</a> together to provide blazing fast client load times as well as secure access to a transactional database.
        </template>

        <template #project-description-list>
            <li>
                <p class="bodyText">
                    A <a class="link" href="https://en.wikipedia.org/wiki/Static_web_page">Static Page</a> is served to the client with exceptional speed using the <a href="https://azure.microsoft.com/en-in/overview/what-is-paas/" class="link">Platform As A Service (PAAS)</a> provider <a class="link" href="https://www.netlify.com/">Netlify</a>. 
                </p>
            </li>
            <li>
                <p class="bodyText">
                    This <a class="link" href="https://en.wikipedia.org/wiki/Static_web_page">Static Page</a> is invested with the responsibility to conduct and proctor the game. Client computation resources are utilized as much as possible so as to keep operation costs of the server low.
                </p>
            </li>
            <li>
                <p class="bodyText">
                    The server hosted on the platform <a class="link" href="https://www.heroku.com/platform">Heroku</a> is responsible for storing and maintaining player records using a <a href="https://www.mongodb.com/databases/types/transactional-databases" class="link">Transactional Database</a> .
                </p>
            </li>
            <li>
                <p class="bodyText">
                    The <a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api" class="link">Rest Api</a> implemented by the server hosted on <a class="link" href="https://www.heroku.com/platform">Heroku</a> is used as an interface for the client to access player records while the game is in session in the browser.  
                </p>
            </li>
        </template>

        <template #sticker-box>
            <NetlifyIcon />
            <Icon size="64" color="#262525">
                <BoardGames20Filled />
            </Icon>
            <HerokuIcon />
        </template>
    </PhatProjectCard>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

li {
    margin-top: var(--spacing-normal);
}
</style>

<script>
import PhatProjectCard from '@/components/PhatProjectCard';

import { Icon } from '@vicons/utils'

import NetlifyIcon from '@/components/Icons/NetlifyIcon.vue'; 
import BoardGames20Filled from '@/components/Icons/BoardGameIcon.vue';
import HerokuIcon from '@/components/Icons/HerokuIcon.vue';

export default {
    name: "FlappyBirdPhatCard",
    components:{
        PhatProjectCard,

        Icon,
        NetlifyIcon,
        BoardGames20Filled,
        HerokuIcon
    }
}
</script>