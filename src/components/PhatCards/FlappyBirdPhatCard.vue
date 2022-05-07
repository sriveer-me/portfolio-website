<template>
    <PhatProjectCard 
        title="Flappy Bird Game"
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
                name: 'JSON',
                image: require('@/assets/images/json-logo.png')
            },
            {
                name: 'MySQL',
                image: require('@/assets/images/mysql-logo.png')
            },
        ]"
        :images="[
            require('@/assets/images/flappy-bird-full-website-1.png'),
            require('@/assets/images/flappy-bird-full-website-2.png'),
            require('@/assets/images/flappy-bird-full-website-3.png'),
            require('@/assets/images/flappy-bird-full-website-4.png')
        ]"
    >
        <template #projectDescription>
            <p class="strong text-center text-small">
                This blockbuster game was rebuilt using <a class="link" href="https://www.w3schools.com/html/html5_canvas.asp">HTML Canvas Technology</a> and was subsequently deployed on <a class="link" href="https://www.heroku.com/platform">Heroku</a> so that it could once again be competed on and enjoyed by millions of players all over the world.
            </p>
            <ul class="project-description-list">
                <li>
                    <p class="bodyText">
                        <a class="link" href="https://www.w3schools.com/html/html5_canvas.asp">Html5 Canvas</a> allowed development of this game without needing to worry much about underlying platform and <a class="link" href="https://en.wikipedia.org/wiki/List_of_rendering_APIs">Rendering Api</a> details. This not only allowed for quicker development but also gave me more time to look at other areas like audio, effects and multiplayer.
                    </p>
                </li>
                <li>
                    <p class="bodyText">
                        The <a class="link" href="https://www.countryflagsapi.com/">Flags Api</a> is integrated inside the project so as to display to the user the country flag of their origin.
                    </p>
                </li>
                <li>
                    <p class="bodyText">
                        The server hosted on the platform <a class="link" href="https://www.heroku.com/platform">Heroku</a> is responsible for storing and maintaining player records using a <a href="https://www.mongodb.com/databases/types/transactional-databases" class="link">Transactional Database</a> .
                    </p>
                </li>
                <li>
                    <p class="bodyText">
                        A <a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api" class="link">Rest Api</a> implemented by the server hosted on <a class="link" href="https://www.heroku.com/platform">Heroku</a> is used as an interface for the client to access player records while the game is in session on the browser.  
                    </p>
                </li>
            </ul>
            <div class="sticker-box">
                <Icon size="64" color="#262525">
                    <Html5 />
                </Icon>
                <Icon size="64" color="#262525">
                    <Gamepad />
                </Icon>
                <HerokuIcon />
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
import HerokuIcon from '@/components/Icons/HerokuIcon.vue';
import Html5 from '@vicons/fa/Html5';
import Gamepad from '@vicons/fa/Gamepad'

export default {
    name: "FlappyBirdPhatCard",
    components:{
        PhatProjectCard,

        Icon,
        HerokuIcon,
        Html5,
        Gamepad
    }
}
</script>