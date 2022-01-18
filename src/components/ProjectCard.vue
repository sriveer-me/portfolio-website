<template>
    <div class="project-card">
        <h1 class="bodyHeading">{{title}}</h1>
        <img :src="image" :alt="imageAlt">
        <slot name="projectDescription"/>
        <div class="buttons">
            <a :href="liveLink" class="button bodyText alternate">
                <Icon>
                    <BranchFork24Regular />
                </Icon>
                Live Version
            </a>
            <a :href="srcLink" class="button bodyText alternate">
                <Icon>
                    <OpenOutline />
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
    padding: var(--spacing-normal);
    
    background-color: $primary-white;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-normal);
}

.left,
.right{
    text-align: center;

    @include for-desktop-up{
        text-align: left;
    }
}

img{
    width: 100%;
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
    background-color: $primary-black;
    padding: var(--spacing-small) var(--spacing-normal);

    border-radius: 2px;
}
</style>

<script>
import { Icon } from '@vicons/utils'
import  BranchFork24Regular  from '@vicons/fluent/BranchFork24Regular';
import  OpenOutline  from '@vicons/ionicons5/OpenOutline';

export default {
    name: "Project Card",
    components:{
        Icon,
        BranchFork24Regular,
        OpenOutline
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