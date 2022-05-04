<template>
    <div class="project-card">
    
        <div class="left">
            <h1 class="body-heading">{{title}}</h1>
            <Carousel :images="images"/>
            <div class="tag-container">
                <AvatarTag v-for="(tag,index) in tags" :name="tag.name" :image="tag.image" :key="String(`${name}${index}`)" />
            </div>
            <div class="action-group">
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
        
        <div class="right">
            <ul class="project-description">
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi debitis esse nesciunt? Voluptatum, repellendus perspiciatis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum est laboriosam rerum reiciendis ut nam explicabo deserunt corrupti fuga!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate repellat reiciendis repellendus provident nostrum quibusdam eligendi consectetur possimus quos ex sequi magnam ipsa iure, perferendis veritatis ipsam nesciunt, qui blanditiis.</li>
               
            </ul>
            <div class="icon-box">

            </div>
        </div>
    
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.project-card{
    display: flex;
    flex-direction: row;
    background-color: $primary-white;

    margin: var(--spacing-large);
    padding: var(--spacing-large);
    border-radius: 5px;
}

.left{
    flex: 0 0 40%;
    overflow: hidden;
    height: fit-content;

    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-normal);
}

.right{
    flex: 0 0 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: var(--spacing-normal);
}


.tag-container{
    display: flex;
    flex-direction: row;
    column-gap: var(--spacing-small);
    flex-wrap: wrap;

    width: 100%;
}

.action-group{
    display: flex;
    justify-content: space-between;
    width: 100%;
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
import Carousel from '@/components/Carousel.vue';
import AvatarTag from '@/components/AvatarTag.vue';

import { Icon } from '@vicons/utils'
import  BranchFork24Regular  from '@vicons/fluent/BranchFork24Regular';
import  OpenOutline  from '@vicons/ionicons5/OpenOutline';

export default {
    name: "Project Card",
    components:{
        Icon,
        BranchFork24Regular,
        OpenOutline,
        
        Carousel,
        AvatarTag
    },
    props:{
        title:{
            type: String,
            default: "Project Title"
        },
        images:{
            default: [
                "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
                "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
                "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
                "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            ]
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

        tags:{
            default: [
                {
                    name: "NoName Tag - 1",
                    image: "https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
                },
                {
                    name: "NoName Tag - 2",
                    image: "https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
                },
                 {
                    name: "Ganna",
                    image: "https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
                },
                 {
                    name: "Sigmna",
                    image: "https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
                }

            ]
        }
    }
}
</script>