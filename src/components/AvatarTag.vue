<template>
    <n-tag class="avatar-tag">
        <p class="avatar-tag-name">{{name}}</p>
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
        },
        gotoLink:{
            type: String,
            default: "NotSet"
        },
        nameWrappable: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        if(this.$props.gotoLink !== "NotSet")
        {
            this.$el.style.cursor = "pointer";
            this.$el.addEventListener('click',function(){
                window.location.href = this.gotoLink;
            }.bind(this));

            let nameTag = this.$el.querySelector('.avatar-tag-name');
            nameTag.style.color = "#2D56E5";
        }

        if(this.$props.nameWrappable === true)
        {
            let nameTag = this.$el.querySelector('.avatar-tag-name');
            nameTag.style.whiteSpace = "normal";

            let tag = this.$el;
            tag.style.paddingTop = "20px";
            tag.style.paddingBottom = "20px";
        }
    }
}
</script>