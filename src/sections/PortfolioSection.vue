<template>
    <section class="portfolio-section">
        <div class="wrapper">
            <h1 class="hero-text dark-mode section-heading">Projects</h1>
            <h2 class="menu-item-text caption large-margin-top">Given Below Is A Detailed List Of My Most Important Projects Undertaken Yet.</h2>
    
            <div class="projects">
                <ProjectCard 
                    style="grid-area: 'project-1'"
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
                    style="grid-area: 'project-2'"
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
            <a class="dashed-button menu-item-text" href="#">Download My Resume</a>
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
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "project-1",
        "project-2",
        "project-3",
        "project-4",
        "project-5",
        "project-6";

    @include for-tablet-portrait-up{
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: 
            "project-1 project-2",
            "project-3 project-4",
            "project-5 project-6";
    }

    @include for-desktop-up{
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
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
</style>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
    name: "Portfolio Section",
    components:{
        ProjectCard
    }
}
</script>