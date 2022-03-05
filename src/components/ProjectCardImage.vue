<template>
    <n-image
        class="project-card-image"
        :alt="imageAlt"
        :src="image"
    />
</template>

<script>
import {NImage} from 'naive-ui';

export default {
    name: "ProjectCardImage",
    components:{
        NImage
    },
    props:{
        image:{
            type:String,
            default: "https://via.placeholder.com/200"
        },
        imageAlt:{
            type:String,
            default: "project-image"
        },
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/setting' as *;

.n-image{
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    min-height: 360px;
    max-height: 360px;
    @include for-tablet-portrait-up{
        min-height: 375px;
        max-height: 375px;
    }
    @include for-desktop-up{
        min-height: 400px;
        max-height: 400px;
    }

    img{
        width: 100%;
        box-shadow: 5px 5px 10px #262525;
    }
}
</style>