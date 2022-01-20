<template>
<div class="app">
    <Navbar />

    <HomeSection />

    <SectionGap  class="dark-mode"/>
    <PortfolioSection />

    <SectionGap />
    <HireMeSection />

    <SectionGap class="dark-mode" />
    <ContactMeSection />
    <!-- <SectionGap class="dark-mode" /> -->
</div>
</template>

<script>
import {generateAnimation} from '@/js/Animations/main.js';

import HomeSection from '@/sections/HomeSection.vue';
import PortfolioSection from '@/sections/PortfolioSection.vue';
import HireMeSection from '@/sections/HireMe.vue';
import ContactMeSection from '@/sections/ContactMeSection.vue';

import SectionGap from '@/sections/SectionGap.vue';

import Navbar from '@/components/Navbar/Navbar.vue';

export default {
    name: 'App',
    components:{
        HomeSection,
        PortfolioSection,
        HireMeSection,
        ContactMeSection,

        Navbar,

        SectionGap
    },
    mounted(){
        console.log('app started');
        setTimeout(function(){
            generateAnimation();
        },0);
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
