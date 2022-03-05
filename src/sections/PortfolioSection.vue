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
                    class="portfolio-project-card" id="portfolio-project-card-1"
                    style="grid-area: 'project-1'"
                    title="Blog Website"
                    :image="require('@/assets/images/quiz-app.png')"
                    imageAlt="Website Image"
                    liveLink="https://quiz-app-veeru.netlify.app/" srcLink="https://github.com/veeru-neerukonda/quiz-app-game"
                >
                    <template #projectDescription>
                        <p class="bodyText strong">
                            This Application being a Full Stack application takes advantages of the fact that Back-End can be safely deployed on <a class="link" href="https://www.heroku.com/platform">Heroku</a> while a blazing fast Client facing Static Front-End Website is best served by <a class="link" href="https://www.netlify.com/">Netlify.</a>
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
                    class="portfolio-project-card" id="portfolio-project-card-3"
                    style="grid-area: 'project-3'"
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


export default {
    name: "Portfolio Section",
    components:{
        ProjectCard,
        Icon,
        LogoVue,
        Json,
        Js
    }
}
</script>