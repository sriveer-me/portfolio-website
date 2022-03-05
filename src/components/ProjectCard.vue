<template>
    <div class="project-card">
        <h1 class="body-heading">{{title}}</h1>
        <ProjectCardImage
            :imageAlt="imageAlt"
            :image="image"
        />
        <div class="project-description">
            <slot name="projectDescription"/>
        </div>
        <div class="buttons">
            <a :href="liveLink" class="button bodyText strong alternate">
                <Icon>
                    <OpenOutline />
                </Icon>
                View Live
            </a>
            <a :href="srcLink" class="button bodyText strong alternate">
                <Icon>
                    <BranchFork24Regular />
                </Icon>
                Source
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;

h1{
    text-align: center;
    @include for-tablet-portrait-up{
        text-align: left;
    }
}

.project-card{
    box-shadow: inset 0px 0px 22px #262525;

    padding: var(--spacing-large);
    
    background-color: $primary-white;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-large);
}

.left,
.right{
    text-align: center;

    @include for-desktop-up{
        text-align: left;
    }
}

.project-description{
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.buttons{
    display: flex;
    justify-content: space-between;
}

.button{
    display: flex;
    flex-direction: row;
    column-gap: var(--spacing-normal);
    align-items: center;

    text-decoration: none;
    color: $primary-white;
    background-color: map-get($accent,"light-mode");

    padding: var(--spacing-small) var(--spacing-normal);

    border-radius: 5px;
}
</style>

<script>
import { Icon } from '@vicons/utils'
import  BranchFork24Regular  from '@vicons/fluent/BranchFork24Regular';
import  OpenOutline  from '@vicons/ionicons5/OpenOutline';

import ProjectCardImage from '@/components/ProjectCardImage.vue';

export default {
    name: "Project Card",
    components:{
        Icon,
        BranchFork24Regular,
        OpenOutline,

        ProjectCardImage
    },
    props:{
        title:{
            type: String,
            default: "Project Title"
        },
        image:{
            type:String,
            default: "https://via.placeholder.com/200"
        },
        imageAlt:{
            type:String,
            default: "project-image"
        },

        liveLink:{
            type:String,
            default:"https://www.google.com"
        },
        srcLink:{
            type:String,
            default:"https://www.google.com"
        },
    }
}
</script>