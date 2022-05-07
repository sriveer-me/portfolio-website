<template>
    <n-image :src="image" class="ImageComponent"/>
</template>

<script>
import {NImage} from 'naive-ui';

export default {
    name: "ImageComponent",
    components:{
        //NSpace,
        NImage
    },
    props:{
        height:{
            type: Number,
            default: 100
        },
        image:{
            type: String,
            default: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        }
    }
}
</script>

<style lang="scss">
.ImageComponent {
    width: 100%;
    height: 400px;
    img{
        max-height: 100%;
        object-fit: contain;
        margin: auto
    }
}
</style>