<template>
<div class="app">
    <Navbar />

    <HomeSection />

    <SectionGap  class="dark-mode"/>
    <PortfolioSection />
    <!-- <SectionGap  class="dark-mode"/> -->

    <SectionGap />
    <HireMeSection />
    <!-- <SectionGap /> -->

</div>
</template>

<script>
import HomeSection from '@/sections/HomeSection.vue';
import PortfolioSection from '@/sections/PortfolioSection.vue';
import HireMeSection from '@/sections/HireMe.vue';

import SectionGap from '@/sections/SectionGap.vue';

import Navbar from '@/components/Navbar/Navbar.vue';

export default {
    name: 'App',
    components:{
        HomeSection,
        PortfolioSection,
        HireMeSection,
        Navbar,

        SectionGap
    },
    mounted(){
        console.log('app started')
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/setting' as *;

.wrapper{
    max-width: 1400px;
    margin: 0 auto; 
}
</style>
