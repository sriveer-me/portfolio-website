<template>
    <div class="project-card">
        <div class="header">
            <h1 class="body-heading">{{title}}</h1>
            <a href="#">ResetCard</a>
        </div>

        <div class="content">
            <div class="left">
                <Carousel :images="images"/>
                <div class="tag-container">

                </div>
            </div>
            <div class="right">
                
            </div>
        </div>

        <div class="footer">

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.project-card{
    display: flex;
    flex-direction: column;
    justify-content: stretch;
}

.header{
    flex: 0 0 50px;
    background-color: red;
}

.content{
    flex: 1 1 auto;
    background-color: green;
}

.footer{
    flex: 0 0 50px;
    background-color: blue;
}

</style>

<script>
// import { Icon } from '@vicons/utils'
// import  BranchFork24Regular  from '@vicons/fluent/BranchFork24Regular';
// import  OpenOutline  from '@vicons/ionicons5/OpenOutline';

// import ProjectCardImage from '@/components/ProjectCardImage.vue';

import Carousel from '@/components/Carousel.vue';

export default {
    name: "Project Card",
    components:{
        Carousel
        // Icon,
        // BranchFork24Regular,
        // OpenOutline,

        // ProjectCardImage
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
    }
}
</script>