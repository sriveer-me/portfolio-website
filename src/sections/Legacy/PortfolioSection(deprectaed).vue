<template>
    <section class="portfolio-section" id="portfolio-section">
        <div class="wrapper">
            <h1 class="hero-text dark-mode section-heading" id="portfolio-hero-heading">Projects</h1>
            <h2 class="sub-heading caption large-margin-top hero-sub-heading" id="portfolio-hero-sub-heading">Given Below Is A Detailed List Of My Most Important Projects Undertaken Yet.</h2>
    
            <div class="projects">
                <ProjectCard
                    class="portfolio-project-card" id="portfolio-project-card-1"
                    style="grid-area: 'project-1'"
                    title="Blog Website"
                    :image="require('@/assets/images/vn-blog.png')"
                    imageAlt="Website Image"
                    liveLink="#" srcLink="#"
                >
                    <template #projectDescription>
                        <p class="bodyText strong">
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
                </ProjectCard>

                <ProjectCard
                    class="portfolio-project-card" id="portfolio-project-card-2"
                    style="grid-area: 'project-2'"
                    title="Quiz App"
                    :image="require('@/assets/images/quiz-app.png')"
                    imageAlt="Quiz App Image"
                    liveLink="https://quiz-app-veeru.netlify.app/" srcLink="https://github.com/veeru-neerukonda/quiz-app-game"
                >
                    <template #projectDescription>
                        <p class="bodyText strong">
                            This fullstack web game uses both <a class="link" href="https://www.heroku.com/platform">Heroku</a> and <a class="link" href="https://www.netlify.com/">Netlify</a> together to provide blazing fast client load times as well as secure access to a transactional database.
                        </p>
                        <ul class="project-description-list">
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
                        </ul>
                        <div class="sticker-box">
                            <NetlifyIcon />
                            <Icon size="64" color="#262525">
                                <BoardGames20Filled />
                            </Icon>
                            <HerokuIcon />
                        </div>
                    </template>
                </ProjectCard>

               <ProjectCard
                    class="portfolio-project-card" id="portfolio-project-card-3"
                    style="grid-area: 'project-3'"
                    title="Flappy Bird Game"
                    :image="require('@/assets/images/flappy-bird-game-screenshot.png')"
                    imageAlt="Flappy Bird Game Website"
                    liveLink="https://bird-flap-game.herokuapp.com/" srcLink="https://github.com/ImmaculateEmpyrean/flappy-bird"
                >
                    <template #projectDescription>
                        <p class="bodyText strong">
                            This blockbuster game was rebuilt by using the <a class="link" href="https://www.w3schools.com/html/html5_canvas.asp">HTML Canvas Technology</a> and was subsequently deployed on <a class="link" href="https://www.heroku.com/platform">Heroku</a> for accessibility throughout the entire globe.
                        </p>
                        <ul class="project-description-list">
                            <li>
                                <p class="bodyText">
                                  <a class="link" href="https://www.w3schools.com/html/html5_canvas.asp">Html5 Canvas</a> allowed development of this game without needing to worry much about underlying platform and <a class="link" href="https://en.wikipedia.org/wiki/List_of_rendering_APIs">Rendering Api</a> details like vertex and index buffer as well as shaders using <a class="link" href="https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl">HLSL</a> or equivalent. this not only allowed for quicker development but also gave me more time to look at other areas like sound and graphics. 
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
                                    The <a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api" class="link">Rest Api</a> implemented by the server hosted on <a class="link" href="https://www.heroku.com/platform">Heroku</a> is used as an interface for the client to access player records while the game is in session in the browser.  
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
                </ProjectCard>

                <ProjectCard
                    class="portfolio-project-card" id="portfolio-project-card-4"
                    style="grid-area: 'project-4'"
                    title="E-Commerce Platform"
                    image="https://via.placeholder.com/150"
                    imageAlt="the placeholder image"
                    liveLink="#" srcLink="#"
                >
                    <template #projectDescription>
                        <p class="bodyText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ipsum adipisci eum libero? Numquam dolorem officia doloribus itaque reiciendis dolores! Accusamus id necessitatibus ratione mollitia, ducimus porro sit veniam, sapiente nostrum rerum blanditiis illo quas molestias est non odit recusandae consectetur ad. Ratione eveniet in quasi nemo provident odit earum!</p>
                    </template>
                </ProjectCard>

                <ProjectCard
                    class="portfolio-project-card" id="portfolio-project-card-5"
                    style="grid-area: 'project-5'"
                    title="E-Commerce Platform"
                    image="https://via.placeholder.com/150"
                    imageAlt="the placeholder image"
                    liveLink="#" srcLink="#"
                >
                    <template #projectDescription>
                        <p class="bodyText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ipsum adipisci eum libero? Numquam dolorem officia doloribus itaque reiciendis dolores! Accusamus id necessitatibus ratione mollitia, ducimus porro sit veniam, sapiente nostrum rerum blanditiis illo quas molestias est non odit recusandae consectetur ad. Ratione eveniet in quasi nemo provident odit earum!</p>
                    </template>
                </ProjectCard>

                <ProjectCard
                    class="portfolio-project-card" id="portfolio-project-card-6"
                    style="grid-area: 'project-6'"
                    title="E-Commerce Platform"
                    image="https://via.placeholder.com/150"
                    imageAlt="the placeholder image"
                    liveLink="#" srcLink="#"
                >
                    <template #projectDescription>
                        <p class="bodyText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ipsum adipisci eum libero? Numquam dolorem officia doloribus itaque reiciendis dolores! Accusamus id necessitatibus ratione mollitia, ducimus porro sit veniam, sapiente nostrum rerum blanditiis illo quas molestias est non odit recusandae consectetur ad. Ratione eveniet in quasi nemo provident odit earum!</p>
                    </template>
                </ProjectCard>

            </div>
        </div>

        <div class="actions">
            <a class="dashed-button menu-item-text" :href="require('@/assets/resume-veeru.pdf')" download="veeru-resume.pdf">Download My Resume</a>
            <a class="dashed-button menu-item-text" href="#">View More Projects</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.portfolio-section{
    min-height: 100vh;
    margin: 0 auto;
    background-color: $primary-black;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.projects{
    margin-top: calc(var(--spacing-large) * 2);
    margin-bottom: calc(var(--spacing-large) * 2);
    @include for-desktop-up{
        margin-top: var(--spacing-large);
        margin-bottom: var(--spacing-large);
    }

    display: grid;
    gap: var(--spacing-large);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,auto);
    grid-template-areas: 
        "project-1",
        "project-2",
        "project-3",
        "project-4",
        "project-5",
        "project-6";

    @include for-tablet-portrait-up{
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3,auto);
        grid-template-areas: 
            "project-1 project-2",
            "project-3 project-4",
            "project-5 project-6";
    }

    @include for-desktop-up{
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(2,auto);
        grid-template-areas: 
            "project-1 project-2 project-3",
            "project-4 project-5 project-6";
    }
}

.actions{
    display: flex;
    flex-direction: column;
    margin: var(--spacing-large);
    row-gap: calc(var(--spacing-large) * 2);
    @include for-tablet-portrait-up{
        margin: 0;
        row-gap: 0;
    }

    @include for-tablet-portrait-up{
        flex-direction: row;
        height: calc(var(--spacing-large) * 3);
    }

    column-gap: var(--spacing-large);
    a{
        flex: 1 1 50%;
        
        border: 3px dashed $primary-black;

        display: flex;
        justify-content: center;
        align-items: center;

        color: $primary-black;
        background-color: $primary-white;
        text-decoration: none;
    }
}

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
}
</style>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

import { Icon } from '@vicons/utils'
import LogoVue from '@vicons/ionicons5/LogoVue'
import Json from '@vicons/carbon/Json'
import Js from '@vicons/fa/Js';
import Html5 from '@vicons/fa/Html5';
import Gamepad from '@vicons/fa/Gamepad'

import BoardGames20Filled from '@/components/Icons/BoardGameIcon.vue';
import HerokuIcon from '@/components/Icons/HerokuIcon.vue';
import NetlifyIcon from '@/components/Icons/NetlifyIcon.vue'; 

export default {
    name: "Portfolio Section",
    components:{
        ProjectCard,
        Icon,
        LogoVue,
        Json,
        Js,
        Html5,
        BoardGames20Filled,

        HerokuIcon,
        NetlifyIcon,
        Gamepad
    }
}
</script>