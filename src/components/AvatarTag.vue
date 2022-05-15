<template>
    <n-tag class="avatar-tag">
        {{name}}
        <template #avatar>
            <n-avatar :src="image" />
        </template>
    </n-tag>
</template>

<script>
import {NTag,NAvatar} from 'naive-ui';

export default {
    name: "AvatarTag",
    components:{
        NTag,
        NAvatar
    },
    props:{
        name:{
            type: String,
            default: "No Name"
        },
        image:{
            type: String,
            default: "https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" 
        }
    }
}
</script>