<template>
    <div class="section-gap"></div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/sections/_section.scss';

.section-gap{
    height: 15vh;
    @include for-tablet-portrait-up{
        height: 25vh;
    }
    @include for-desktop-up{
        height: 30vh;
    }

    background-color: $primary-white;
    &.dark-mode{
        background-color: $primary-black;
    }
}
</style>

<script>
export default {
    name: "SectionGap"
}
</script>